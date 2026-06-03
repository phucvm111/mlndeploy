const CrosswordGame = (() => {
  const storagePrefix = "crosswordProgress:";
  const state = {
    chapters: [],
    activeChapter: null,
    grid: [],
    placedEntries: [],
    cellMap: new Map(),
    cellValues: {},
    activeCellKey: null,
    currentDirection: "across",
    selectedEntryId: null,
    hintCount: 0,
    saveTimeout: null,
  };

  const elements = {};

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    cacheElements();
    bindGlobalEvents();
    await loadChapters();

    const chapterSlug = new URLSearchParams(window.location.search).get("chapter");
    if (chapterSlug) {
      await openChapter(chapterSlug);
    }
  }

  function cacheElements() {
    elements.chapterGrid = document.getElementById("chapter-grid");
    elements.puzzleSection = document.getElementById("puzzle-section");
    elements.chapterBadge = document.getElementById("chapter-badge");
    elements.progressPill = document.getElementById("progress-pill");
    elements.puzzleTitle = document.getElementById("puzzle-title");
    elements.puzzleDescription = document.getElementById("puzzle-description");
    elements.sourceSections = document.getElementById("source-sections");
    elements.crosswordBoard = document.getElementById("crossword-board");
    elements.acrossClues = document.getElementById("across-clues");
    elements.downClues = document.getElementById("down-clues");
    elements.activeWordCard = document.getElementById("active-word-card");
    elements.directionLabel = document.getElementById("direction-label");
    elements.correctCount = document.getElementById("correct-count");
    elements.entryCount = document.getElementById("entry-count");
    elements.hintCount = document.getElementById("hint-count");
    elements.scoreCount = document.getElementById("score-count");
    elements.messagePanel = document.getElementById("message-panel");
    elements.toggleDirectionBtn = document.getElementById("toggle-direction-btn");
    elements.hintBtn = document.getElementById("hint-btn");
    elements.checkBtn = document.getElementById("check-btn");
    elements.resetBtn = document.getElementById("reset-btn");
    elements.returnToChaptersBtn = document.getElementById("return-to-chapters-btn");
  }

  function bindGlobalEvents() {
    elements.toggleDirectionBtn.addEventListener("click", toggleDirection);
    elements.hintBtn.addEventListener("click", revealHint);
    elements.checkBtn.addEventListener("click", checkAnswers);
    elements.resetBtn.addEventListener("click", resetProgress);
    elements.returnToChaptersBtn.addEventListener("click", () => {
      elements.puzzleSection.classList.add("hidden");
      window.history.replaceState({}, "", "crossword-game.html");
      showMessage("Đã quay lại danh sách chương. Tiến độ hiện tại vẫn được lưu.", "info");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  async function loadChapters() {
    try {
      const response = await fetch("/api/crossword/chapters");
      if (!response.ok) {
        throw new Error("Không tải được danh sách chương ô chữ.");
      }

      state.chapters = await response.json();
      renderChapterCards();
    } catch (error) {
      renderChapterError(error.message);
    }
  }

  function renderChapterCards() {
    elements.chapterGrid.innerHTML = state.chapters
      .map(
        (chapter) => `
          <article class="chapter-card rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-panel backdrop-blur-xl">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Chương ${chapter.chapterNumber}
                </div>
                <h3 class="mt-4 text-xl font-bold text-ink">${chapter.title}</h3>
                <p class="mt-3 text-sm leading-6 text-slate-600">${chapter.description}</p>
              </div>
              <div class="rounded-2xl bg-amber-50 px-3 py-2 text-center text-amber-900 shadow-sm">
                <div class="text-xs font-semibold uppercase tracking-[0.14em]">Từ khóa</div>
                <div class="mt-1 text-2xl font-black">${chapter.totalEntries}</div>
              </div>
            </div>
            <div class="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span class="rounded-full bg-slate-100 px-3 py-1">Độ khó ${chapter.difficultyRange.min}-${chapter.difficultyRange.max}</span>
              <span class="rounded-full bg-slate-100 px-3 py-1">API sinh lưới tự động</span>
            </div>
            <button data-slug="${chapter.slug}"
              class="chapter-start-btn mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5">
              <span class="material-symbols-outlined text-base">play_arrow</span>
              Mở ô chữ
            </button>
          </article>
        `,
      )
      .join("");

    elements.chapterGrid.querySelectorAll(".chapter-start-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        await openChapter(button.dataset.slug);
      });
    });
  }

  function renderChapterError(message) {
    elements.chapterGrid.innerHTML = `
      <div class="rounded-[1.75rem] border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
        ${message}
      </div>
    `;
  }

  async function openChapter(slug) {
    try {
      const response = await fetch(`/api/crossword/chapters/${slug}/play`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Không tải được ô chữ.");
      }

      state.activeChapter = data;
      state.grid = data.grid;
      state.placedEntries = sortEntries(data.placedEntries);
      state.cellMap = buildCellMap(data.grid, state.placedEntries);
      state.cellValues = {};
      state.activeCellKey = null;
      state.currentDirection = "across";
      state.selectedEntryId = null;
      state.hintCount = 0;

      hydrateProgress(slug);
      renderPuzzleShell();
      renderGrid();
      renderClues();
      restoreFocus();
      updateStats();
      updateDirectionLabel();
      updateActiveWordCard();
      elements.puzzleSection.classList.remove("hidden");
      window.history.replaceState({}, "", `crossword-game.html?chapter=${slug}`);
      window.scrollTo({ top: elements.puzzleSection.offsetTop - 20, behavior: "smooth" });

      if (!state.activeCellKey) {
        selectFirstAvailableCell();
      }
    } catch (error) {
      showMessage(error.message, "error");
    }
  }

  function renderPuzzleShell() {
    const chapter = state.activeChapter;
    elements.chapterBadge.textContent = `Chương ${chapter.chapterNumber}`;
    elements.puzzleTitle.textContent = chapter.title;
    elements.puzzleDescription.textContent = chapter.description;
    elements.sourceSections.innerHTML = chapter.source.sections
      .map(
        (section) => `
          <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">${section}</span>
        `,
      )
      .join("");

    const placedCount = state.placedEntries.length;
    const totalCount = chapter.totalEntries;
    elements.progressPill.textContent = `Đã đặt ${placedCount}/${totalCount} từ`;

    if (chapter.unplacedEntries.length > 0) {
      showMessage(
        `Một vài từ chưa đặt được trong lần sinh lưới này (${chapter.unplacedEntries.length} từ). Màn chơi vẫn dùng lưới tốt nhất hiện có.`,
        "warning",
      );
    } else {
      hideMessage();
    }
  }

  function renderGrid() {
    const rows = state.grid.length;
    const cols = state.grid[0] ? state.grid[0].length : 0;
    elements.crosswordBoard.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;

    const html = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const cellKey = getCellKey(row, col);
        const cellInfo = state.cellMap.get(cellKey);

        if (!cellInfo) {
          html.push('<div class="crossword-cell blocked" aria-hidden="true"></div>');
          continue;
        }

        const value = state.cellValues[cellKey] || "";
        html.push(`
          <label class="crossword-cell" data-cell-key="${cellKey}">
            ${cellInfo.number ? `<span class="crossword-number">${cellInfo.number}</span>` : ""}
            <input
              type="text"
              inputmode="text"
              autocomplete="off"
              autocapitalize="characters"
              maxlength="1"
              data-cell-key="${cellKey}"
              value="${value}"
              aria-label="Ô ${row + 1}-${col + 1}" />
          </label>
        `);
      }
    }

    elements.crosswordBoard.innerHTML = html.join("");

    elements.crosswordBoard.querySelectorAll("input[data-cell-key]").forEach((input) => {
      input.addEventListener("focus", handleCellFocus);
      input.addEventListener("click", handleCellClick);
      input.addEventListener("input", handleCellInput);
      input.addEventListener("keydown", handleCellKeyDown);
    });

    refreshHighlights();
    refreshFeedbackClasses();
  }

  function renderClues() {
    const acrossEntries = state.placedEntries.filter((entry) => entry.direction === "across");
    const downEntries = state.placedEntries.filter((entry) => entry.direction === "down");

    elements.acrossClues.innerHTML = renderClueList(acrossEntries);
    elements.downClues.innerHTML = renderClueList(downEntries);

    document.querySelectorAll(".clue-item").forEach((button) => {
      button.addEventListener("click", () => {
        const entry = state.placedEntries.find((item) => item.id === button.dataset.entryId);
        if (!entry) {
          return;
        }

        state.currentDirection = entry.direction;
        state.selectedEntryId = entry.id;
        state.activeCellKey = getCellKey(entry.row, entry.col);
        focusCell(state.activeCellKey);
        updateDirectionLabel();
        refreshHighlights();
        updateActiveWordCard();
      });
    });
  }

  function renderClueList(entries) {
    if (entries.length === 0) {
      return `
        <div class="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
          Chưa có từ nào theo hướng này.
        </div>
      `;
    }

    return entries
      .map(
        (entry) => `
          <button type="button" data-entry-id="${entry.id}"
            class="clue-item w-full rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-left">
            <div class="flex items-start gap-3">
              <div class="min-w-[2rem] rounded-full bg-white px-2 py-1 text-center text-sm font-black text-primary shadow-sm">
                ${entry.number}
              </div>
              <div class="flex-1">
                <div class="text-sm font-semibold leading-6 text-slate-800">${entry.clue}</div>
                <div class="mt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                  <span class="rounded-full bg-white px-2.5 py-1">${entry.answer.length} ô</span>
                  <span class="rounded-full bg-white px-2.5 py-1">Mức ${entry.difficulty}</span>
                  <span class="rounded-full bg-white px-2.5 py-1">${entry.category}</span>
                </div>
              </div>
            </div>
          </button>
        `,
      )
      .join("");
  }

  function handleCellFocus(event) {
    const key = event.target.dataset.cellKey;
    setActiveCell(key, false);
  }

  function handleCellClick(event) {
    const key = event.target.dataset.cellKey;

    if (state.activeCellKey === key) {
      toggleDirection();
      return;
    }

    setActiveCell(key, false);
  }

  function handleCellInput(event) {
    const key = event.target.dataset.cellKey;
    const normalizedValue = normalizeVietnamese(event.target.value).slice(0, 1);

    state.cellValues[key] = normalizedValue;
    event.target.value = normalizedValue;
    clearCellFeedback(key);
    persistProgress();
    updateStats();

    if (normalizedValue) {
      moveToNextCell(key);
    }
  }

  function handleCellKeyDown(event) {
    const key = event.target.dataset.cellKey;
    const entry = getCurrentEntryForCell(key);

    if (!entry) {
      return;
    }

    if (event.key === "Backspace" && !event.target.value) {
      event.preventDefault();
      moveToPreviousCell(key);
      return;
    }

    if (event.key === " ") {
      event.preventDefault();
      toggleDirection();
      return;
    }

    const arrowMoves = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
    };

    if (arrowMoves[event.key]) {
      event.preventDefault();
      const [deltaRow, deltaCol] = arrowMoves[event.key];
      moveByDelta(key, deltaRow, deltaCol);
    }
  }

  function setActiveCell(key, fromProgrammaticFocus) {
    if (!state.cellMap.has(key)) {
      return;
    }

    state.activeCellKey = key;
    const cellInfo = state.cellMap.get(key);
    const preferredEntryId =
      state.currentDirection === "across" ? cellInfo.acrossId || cellInfo.downId : cellInfo.downId || cellInfo.acrossId;

    if (!preferredEntryId) {
      return;
    }

    const preferredEntry = state.placedEntries.find((entry) => entry.id === preferredEntryId);
    state.selectedEntryId = preferredEntry ? preferredEntry.id : null;
    state.currentDirection = preferredEntry ? preferredEntry.direction : state.currentDirection;

    updateDirectionLabel();
    refreshHighlights();
    updateActiveWordCard();

    if (fromProgrammaticFocus) {
      focusCell(key);
    }
  }

  function getCurrentEntryForCell(key) {
    const cellInfo = state.cellMap.get(key);
    if (!cellInfo) {
      return null;
    }

    let entryId = state.currentDirection === "across" ? cellInfo.acrossId : cellInfo.downId;

    if (!entryId) {
      entryId = cellInfo.acrossId || cellInfo.downId;
    }

    return state.placedEntries.find((entry) => entry.id === entryId) || null;
  }

  function getEntryCells(entry) {
    const cells = [];

    for (let index = 0; index < entry.answer.length; index += 1) {
      const row = entry.direction === "across" ? entry.row : entry.row + index;
      const col = entry.direction === "across" ? entry.col + index : entry.col;
      cells.push(getCellKey(row, col));
    }

    return cells;
  }

  function updateActiveWordCard() {
    const entry = state.selectedEntryId
      ? state.placedEntries.find((item) => item.id === state.selectedEntryId)
      : null;

    if (!entry) {
      elements.activeWordCard.textContent = "Chọn một ô hoặc một gợi ý ở cột bên dưới để bắt đầu.";
      return;
    }

    const answerPreview = entry.displayAnswer;
    const completion = getEntryCompletion(entry);
    elements.activeWordCard.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            ${entry.direction === "across" ? "Ngang" : "Dọc"} • ${entry.number}
          </div>
          <div class="mt-2 text-lg font-bold text-ink">${answerPreview}</div>
        </div>
        <div class="rounded-2xl bg-white px-3 py-2 text-sm font-black text-ink shadow-sm">
          ${completion.correct}/${entry.answer.length}
        </div>
      </div>
      <p class="mt-4 text-sm leading-6 text-slate-700">${entry.clue}</p>
      <div class="mt-4 rounded-2xl bg-white px-4 py-3 text-xs leading-6 text-slate-500 shadow-sm">
        <strong>Gợi ý phụ:</strong> ${entry.hint || "Chưa có gợi ý phụ cho từ này."}
      </div>
    `;
  }

  function updateDirectionLabel() {
    elements.directionLabel.textContent =
      state.currentDirection === "across" ? "Hướng: Ngang" : "Hướng: Dọc";
  }

  function refreshHighlights() {
    const activeEntry = state.selectedEntryId
      ? state.placedEntries.find((entry) => entry.id === state.selectedEntryId)
      : null;
    const activeCells = new Set(activeEntry ? getEntryCells(activeEntry) : []);

    document.querySelectorAll(".crossword-cell[data-cell-key]").forEach((cell) => {
      const key = cell.dataset.cellKey;
      cell.classList.toggle("active", key === state.activeCellKey);
      cell.classList.toggle("in-word", activeCells.has(key) && key !== state.activeCellKey);
    });

    document.querySelectorAll(".clue-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.entryId === state.selectedEntryId);
    });
  }

  function refreshFeedbackClasses() {
    Object.keys(state.cellValues).forEach((key) => {
      const cell = document.querySelector(`.crossword-cell[data-cell-key="${key}"]`);
      if (!cell) {
        return;
      }

      cell.classList.remove("correct", "wrong");
    });
  }

  function clearCellFeedback(key) {
    const cell = document.querySelector(`.crossword-cell[data-cell-key="${key}"]`);
    if (!cell) {
      return;
    }

    cell.classList.remove("correct", "wrong");
  }

  function toggleDirection() {
    state.currentDirection = state.currentDirection === "across" ? "down" : "across";
    if (state.activeCellKey) {
      setActiveCell(state.activeCellKey, false);
    }
    updateDirectionLabel();
  }

  function revealHint() {
    const entry = state.selectedEntryId
      ? state.placedEntries.find((item) => item.id === state.selectedEntryId)
      : null;

    if (!entry) {
      showMessage("Hãy chọn một từ trước khi dùng gợi ý.", "warning");
      return;
    }

    const cells = getEntryCells(entry);
    const nextKey = cells.find((key, index) => {
      const cellInfo = state.cellMap.get(key);
      return (state.cellValues[key] || "") !== cellInfo.solution;
    });

    if (!nextKey) {
      showMessage("Từ đang chọn đã đúng hoàn toàn rồi.", "info");
      return;
    }

    const solution = state.cellMap.get(nextKey).solution;
    state.cellValues[nextKey] = solution;
    state.hintCount += 1;

    const input = document.querySelector(`input[data-cell-key="${nextKey}"]`);
    if (input) {
      input.value = solution;
    }

    clearCellFeedback(nextKey);
    persistProgress();
    updateStats();
    refreshHighlights();
    updateActiveWordCard();
    showMessage("Đã mở một ô gợi ý cho từ đang chọn.", "info");
  }

  function checkAnswers() {
    let correctCells = 0;
    let wrongCells = 0;

    state.cellMap.forEach((cellInfo, key) => {
      const cell = document.querySelector(`.crossword-cell[data-cell-key="${key}"]`);
      if (!cell) {
        return;
      }

      const value = state.cellValues[key] || "";
      cell.classList.remove("correct", "wrong");

      if (!value) {
        return;
      }

      if (value === cellInfo.solution) {
        cell.classList.add("correct");
        correctCells += 1;
      } else {
        cell.classList.add("wrong");
        wrongCells += 1;
      }
    });

    const completedEntries = getCompletedEntries().length;
    const totalEntries = state.placedEntries.length;
    const score = totalEntries === 0 ? 0 : Math.round((completedEntries / totalEntries) * 100);

    persistProgress();
    updateStats();
    updateActiveWordCard();

    if (completedEntries === totalEntries && totalEntries > 0) {
      showMessage("Hoàn thành tuyệt vời! Bạn đã giải đúng toàn bộ ô chữ của chương này.", "success");
      return;
    }

    if (wrongCells > 0) {
      showMessage(
        `Kiểm tra xong: ${correctCells} ô đúng, ${wrongCells} ô cần sửa. Điểm hiện tại ${score}%.`,
        "warning",
      );
      return;
    }

    showMessage(
      `Kiểm tra xong: chưa có ô sai đã nhập. Bạn đã hoàn thành ${completedEntries}/${totalEntries} từ.`,
      "success",
    );
  }

  function resetProgress() {
    if (!state.activeChapter) {
      return;
    }

    state.cellValues = {};
    state.hintCount = 0;
    localStorage.removeItem(`${storagePrefix}${state.activeChapter.slug}`);
    renderGrid();
    updateStats();
    updateActiveWordCard();
    showMessage("Đã xóa tiến độ của chương hiện tại.", "info");
    selectFirstAvailableCell();
  }

  function updateStats() {
    const totalCells = Array.from(state.cellMap.values()).length;
    const correctCells = Array.from(state.cellMap.entries()).filter(([key, cell]) => {
      return (state.cellValues[key] || "") === cell.solution;
    }).length;
    const completedEntries = getCompletedEntries();
    const totalEntries = state.placedEntries.length;
    const score = totalEntries === 0 ? 0 : Math.round((completedEntries.length / totalEntries) * 100);

    elements.correctCount.textContent = `${correctCells}/${totalCells}`;
    elements.entryCount.textContent = `${completedEntries.length}/${totalEntries}`;
    elements.hintCount.textContent = `${state.hintCount}`;
    elements.scoreCount.textContent = `${score}%`;
  }

  function getCompletedEntries() {
    return state.placedEntries.filter((entry) => {
      return getEntryCells(entry).every((key) => {
        return (state.cellValues[key] || "") === state.cellMap.get(key).solution;
      });
    });
  }

  function getEntryCompletion(entry) {
    const cells = getEntryCells(entry);
    const correct = cells.filter((key) => {
      return (state.cellValues[key] || "") === state.cellMap.get(key).solution;
    }).length;

    return {
      correct,
      total: cells.length,
    };
  }

  function persistProgress() {
    if (!state.activeChapter) {
      return;
    }

    const completedEntries = getCompletedEntries().map((entry) => entry.id);
    const score =
      state.placedEntries.length === 0
        ? 0
        : Math.round((completedEntries.length / state.placedEntries.length) * 100);

    const payload = {
      chapterSlug: state.activeChapter.slug,
      filledCells: state.cellValues,
      completedEntries,
      score,
      hintCount: state.hintCount,
      activeCellKey: state.activeCellKey,
      currentDirection: state.currentDirection,
      updatedAt: Date.now(),
    };

    window.clearTimeout(state.saveTimeout);
    state.saveTimeout = window.setTimeout(() => {
      localStorage.setItem(`${storagePrefix}${state.activeChapter.slug}`, JSON.stringify(payload));
    }, 100);
  }

  function hydrateProgress(slug) {
    const saved = localStorage.getItem(`${storagePrefix}${slug}`);

    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      state.cellValues = parsed.filledCells || {};
      state.hintCount = parsed.hintCount || 0;
      state.activeCellKey = parsed.activeCellKey || null;
      state.currentDirection = parsed.currentDirection || "across";
    } catch (error) {
      console.warn("Không đọc được tiến độ ô chữ:", error);
    }
  }

  function restoreFocus() {
    if (state.activeCellKey && state.cellMap.has(state.activeCellKey)) {
      setActiveCell(state.activeCellKey, true);
    }
  }

  function selectFirstAvailableCell() {
    const firstEntry = state.placedEntries[0];
    if (!firstEntry) {
      return;
    }

    state.currentDirection = firstEntry.direction;
    state.activeCellKey = getCellKey(firstEntry.row, firstEntry.col);
    state.selectedEntryId = firstEntry.id;
    updateDirectionLabel();
    refreshHighlights();
    updateActiveWordCard();
    focusCell(state.activeCellKey);
  }

  function focusCell(key) {
    const input = document.querySelector(`input[data-cell-key="${key}"]`);
    if (input) {
      input.focus();
      input.select();
    }
  }

  function moveToNextCell(key) {
    const entry = getCurrentEntryForCell(key);
    if (!entry) {
      return;
    }

    const cells = getEntryCells(entry);
    const index = cells.indexOf(key);
    if (index === -1) {
      return;
    }

    const nextKey = cells[index + 1];
    if (nextKey) {
      setActiveCell(nextKey, true);
    }
  }

  function moveToPreviousCell(key) {
    const entry = getCurrentEntryForCell(key);
    if (!entry) {
      return;
    }

    const cells = getEntryCells(entry);
    const index = cells.indexOf(key);
    const previousKey = cells[index - 1];
    if (previousKey) {
      setActiveCell(previousKey, true);
    }
  }

  function moveByDelta(key, deltaRow, deltaCol) {
    const [row, col] = key.split(":").map(Number);
    const nextKey = getCellKey(row + deltaRow, col + deltaCol);

    if (state.cellMap.has(nextKey)) {
      setActiveCell(nextKey, true);
    }
  }

  function buildCellMap(grid, placedEntries) {
    const map = new Map();
    const numbering = new Map();

    placedEntries.forEach((entry) => {
      for (let index = 0; index < entry.answer.length; index += 1) {
        const row = entry.direction === "across" ? entry.row : entry.row + index;
        const col = entry.direction === "across" ? entry.col + index : entry.col;
        const key = getCellKey(row, col);

        if (!map.has(key)) {
          map.set(key, {
            row,
            col,
            solution: grid[row][col],
            acrossId: null,
            downId: null,
            number: null,
          });
        }

        const current = map.get(key);
        if (entry.direction === "across") {
          current.acrossId = entry.id;
        } else {
          current.downId = entry.id;
        }

        if (index === 0) {
          numbering.set(key, entry.number);
        }
      }
    });

    numbering.forEach((number, key) => {
      if (map.has(key)) {
        map.get(key).number = number;
      }
    });

    return map;
  }

  function sortEntries(entries) {
    return [...entries].sort((left, right) => {
      if (left.number !== right.number) {
        return left.number - right.number;
      }

      return left.direction.localeCompare(right.direction);
    });
  }

  function normalizeVietnamese(input) {
    return String(input || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase();
  }

  function getCellKey(row, col) {
    return `${row}:${col}`;
  }

  function showMessage(message, variant) {
    const styles = {
      info: "border-blue-200 bg-blue-50 text-blue-800",
      warning: "border-amber-200 bg-amber-50 text-amber-900",
      success: "border-emerald-200 bg-emerald-50 text-emerald-800",
      error: "border-rose-200 bg-rose-50 text-rose-800",
    };

    elements.messagePanel.className = `rounded-[1.5rem] border px-5 py-4 text-sm font-medium shadow-sm ${styles[variant] || styles.info}`;
    elements.messagePanel.textContent = message;
    elements.messagePanel.classList.remove("hidden");
  }

  function hideMessage() {
    elements.messagePanel.classList.add("hidden");
  }
})();
