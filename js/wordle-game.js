const WordleGame = (() => {
  const storageKey = "wordleProgress";
  const state = {
    chapters: [],
    chapterMeta: new Map(),
    activeChapter: null,
    currentRound: null,
    progress: loadProgress(),
    hintShown: false,
  };

  const elements = {};

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    cacheElements();
    bindEvents();
    await loadChapters();

    const params = new URLSearchParams(window.location.search);
    const chapterSlug = params.get("chapter");
    const roundId = params.get("round");

    if (chapterSlug) {
      await openChapter(chapterSlug, roundId);
    }
  }

  function cacheElements() {
    elements.chapterGrid = document.getElementById("chapter-grid");
    elements.playSection = document.getElementById("play-section");
    elements.chapterBadge = document.getElementById("chapter-badge");
    elements.roundBadge = document.getElementById("round-badge");
    elements.chapterTitle = document.getElementById("chapter-title");
    elements.chapterDescription = document.getElementById("chapter-description");
    elements.sourceSections = document.getElementById("source-sections");
    elements.chapterScore = document.getElementById("chapter-score");
    elements.chapterCompleted = document.getElementById("chapter-completed");
    elements.roundAttempts = document.getElementById("round-attempts");
    elements.roundWordCount = document.getElementById("round-word-count");
    elements.roundClue = document.getElementById("round-clue");
    elements.roundHintPreview = document.getElementById("round-hint-preview");
    elements.guessInput = document.getElementById("guess-input");
    elements.submitGuessBtn = document.getElementById("submit-guess-btn");
    elements.hintBtn = document.getElementById("hint-btn");
    elements.randomRoundBtn = document.getElementById("random-round-btn");
    elements.resetRoundBtn = document.getElementById("reset-round-btn");
    elements.wordCountPill = document.getElementById("word-count-pill");
    elements.attemptsPill = document.getElementById("attempts-pill");
    elements.categoryPill = document.getElementById("category-pill");
    elements.difficultyPill = document.getElementById("difficulty-pill");
    elements.attemptHistory = document.getElementById("attempt-history");
    elements.historyStatus = document.getElementById("history-status");
    elements.resultPanel = document.getElementById("result-panel");
    elements.messagePanel = document.getElementById("message-panel");
    elements.chapterRounds = document.getElementById("chapter-rounds");
    elements.hintPanel = document.getElementById("hint-panel");
    elements.returnToChaptersBtn = document.getElementById("return-to-chapters-btn");
  }

  function bindEvents() {
    elements.submitGuessBtn.addEventListener("click", submitGuess);
    elements.guessInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        submitGuess();
      }
    });
    elements.hintBtn.addEventListener("click", revealHint);
    elements.randomRoundBtn.addEventListener("click", async () => {
      if (!state.activeChapter) {
        return;
      }

      await loadRandomRound(state.activeChapter.slug);
    });
    elements.resetRoundBtn.addEventListener("click", resetCurrentRound);
    elements.returnToChaptersBtn.addEventListener("click", () => {
      elements.playSection.classList.add("hidden");
      window.history.replaceState({}, "", "wordle-game.html");
      showMessage("Đã quay lại danh sách chương. Tiến độ vẫn được giữ lại.", "info");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  async function loadChapters() {
    try {
      const response = await fetch("/api/wordle/chapters");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Không tải được danh sách chương Wordle.");
      }

      state.chapters = data;
      renderChapterCards();
    } catch (error) {
      elements.chapterGrid.innerHTML = `
        <div class="rounded-[1.75rem] border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
          ${error.message}
        </div>
      `;
    }
  }

  function renderChapterCards() {
    elements.chapterGrid.innerHTML = state.chapters
      .map((chapter) => {
        const chapterProgress = getChapterProgress(chapter.slug);
        return `
          <article class="chapter-card rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-panel backdrop-blur-xl">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Chương ${chapter.chapterNumber}
                </div>
                <h3 class="mt-4 text-xl font-bold text-ink">${chapter.title}</h3>
                <p class="mt-3 text-sm leading-6 text-slate-600">${chapter.description}</p>
              </div>
              <div class="rounded-2xl bg-orange-50 px-3 py-2 text-center text-orange-900 shadow-sm">
                <div class="text-xs font-semibold uppercase tracking-[0.14em]">Rounds</div>
                <div class="mt-1 text-2xl font-black">${chapter.totalRounds}</div>
              </div>
            </div>
            <div class="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span class="rounded-full bg-slate-100 px-3 py-1">Điểm ${chapterProgress.score}</span>
              <span class="rounded-full bg-slate-100 px-3 py-1">Xong ${chapterProgress.completedRoundIds.length}/${chapter.totalRounds}</span>
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
              <button data-slug="${chapter.slug}"
                class="open-chapter-btn inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-sm">
                <span class="material-symbols-outlined text-base">play_arrow</span>
                Mở chương
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    elements.chapterGrid.querySelectorAll(".open-chapter-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        await openChapter(button.dataset.slug);
      });
    });
  }

  async function openChapter(slug, preferredRoundId) {
    try {
      const response = await fetch(`/api/wordle/chapters/${slug}`);
      const chapter = await response.json();

      if (!response.ok) {
        throw new Error(chapter.message || "Không tải được chương Wordle.");
      }

      state.activeChapter = chapter;
      state.currentRound = null;
      state.hintShown = false;
      state.chapterMeta.set(slug, chapter);
      renderChapterShell();
      renderRoundList();

      const chapterProgress = getChapterProgress(slug);
      const roundId =
        preferredRoundId ||
        chapterProgress.currentRoundId ||
        (chapter.rounds[0] && chapter.rounds[0].roundId);

      if (roundId) {
        const matchedRound = chapter.rounds.find((round) => round.roundId === roundId);
        if (matchedRound) {
          setCurrentRound(matchedRound);
        } else {
          await loadRandomRound(slug);
        }
      } else {
        await loadRandomRound(slug);
      }

      elements.playSection.classList.remove("hidden");
      window.scrollTo({ top: elements.playSection.offsetTop - 20, behavior: "smooth" });
    } catch (error) {
      showMessage(error.message, "error");
    }
  }

  function renderChapterShell() {
    const chapter = state.activeChapter;
    elements.chapterBadge.textContent = `Chương ${chapter.chapterNumber}`;
    elements.chapterTitle.textContent = chapter.title;
    elements.chapterDescription.textContent = chapter.description;
    elements.sourceSections.innerHTML = chapter.source.sections
      .map(
        (section) => `
          <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">${section}</span>
        `,
      )
      .join("");
    updateChapterStats();
  }

  function renderRoundList() {
    const chapter = state.activeChapter;
    const chapterProgress = getChapterProgress(chapter.slug);

    elements.chapterRounds.innerHTML = chapter.rounds
      .map((round, index) => {
        const roundProgress = getRoundProgress(chapter.slug, round.roundId);
        const isCompleted = roundProgress?.isCompleted;
        const isFailed = roundProgress?.isFailed;
        const isCurrent = state.currentRound && state.currentRound.roundId === round.roundId;
        const badgeClass = isCompleted
          ? "bg-emerald-50 text-emerald-700"
          : isFailed
            ? "bg-rose-50 text-rose-700"
            : "bg-slate-100 text-slate-500";

        return `
          <button type="button" data-round-id="${round.roundId}"
            class="round-chip w-full rounded-[1.35rem] border ${isCurrent ? "border-primary bg-emerald-50/60" : "border-slate-200 bg-slate-50"} px-4 py-3 text-left shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Round ${index + 1}</div>
                <div class="mt-1 text-sm font-semibold leading-6 text-slate-800">${round.clue}</div>
              </div>
              <span class="rounded-full px-2.5 py-1 text-[11px] font-bold ${badgeClass}">
                ${isCompleted ? "Đúng" : isFailed ? "Trượt" : `${round.wordCount} từ`}
              </span>
            </div>
          </button>
        `;
      })
      .join("");

    elements.chapterRounds.querySelectorAll(".round-chip").forEach((button) => {
      button.addEventListener("click", () => {
        const round = chapter.rounds.find((item) => item.roundId === button.dataset.roundId);
        if (round) {
          setCurrentRound(round);
        }
      });
    });

    if (chapterProgress.completedRoundIds.length === chapter.rounds.length) {
      showMessage("Bạn đã hoàn thành tất cả round của chương này. Hãy thử chơi lại để cải thiện điểm.", "success");
    }
  }

  async function loadRandomRound(slug) {
    const chapterProgress = getChapterProgress(slug);
    const excludeRoundIds = chapterProgress.completedRoundIds.join(",");
    const suffix = excludeRoundIds ? `?excludeRoundIds=${encodeURIComponent(excludeRoundIds)}` : "";
    const response = await fetch(`/api/wordle/chapters/${slug}/random${suffix}`);
    const round = await response.json();

    if (!response.ok) {
      throw new Error(round.message || "Không tải được round ngẫu nhiên.");
    }

    setCurrentRound(round);
  }

  function setCurrentRound(round) {
    state.currentRound = { ...round };
    state.hintShown = false;
    const chapterSlug = state.activeChapter.slug;
    const chapterProgress = getChapterProgress(chapterSlug);
    chapterProgress.currentRoundId = round.roundId;
    persistProgress();
    renderCurrentRound();
    renderRoundList();
    updateQueryString(chapterSlug, round.roundId);
  }

  function renderCurrentRound() {
    const round = state.currentRound;
    const chapterSlug = state.activeChapter.slug;
    const roundProgress = getRoundProgress(chapterSlug, round.roundId);
    const attempts = roundProgress?.attempts || [];

    elements.roundBadge.textContent = `${round.wordCount} từ • ${round.maxAttempts} lượt`;
    elements.roundClue.textContent = round.clue;
    elements.roundHintPreview.textContent = "Gợi ý phụ đang được ẩn để bạn tự suy luận trước.";
    elements.wordCountPill.textContent = `${round.wordCount} từ`;
    elements.attemptsPill.textContent = `${attempts.length} / ${round.maxAttempts} lượt`;
    elements.categoryPill.textContent = round.category;
    elements.difficultyPill.textContent = `Mức ${round.difficulty}`;
    elements.roundAttempts.textContent = `${attempts.length}/${round.maxAttempts}`;
    elements.roundWordCount.textContent = `${round.wordCount}`;
    elements.guessInput.value = "";
    elements.guessInput.disabled = Boolean(roundProgress?.isCompleted || roundProgress?.isFailed);
    elements.submitGuessBtn.disabled = Boolean(roundProgress?.isCompleted || roundProgress?.isFailed);
    elements.submitGuessBtn.classList.toggle("opacity-60", elements.submitGuessBtn.disabled);
    elements.submitGuessBtn.classList.toggle("cursor-not-allowed", elements.submitGuessBtn.disabled);
    renderAttempts();
    renderHintPanel();
    renderResultPanel();
    updateChapterStats();
    hideMessage();

    if (!elements.guessInput.disabled) {
      elements.guessInput.focus();
    }
  }

  function renderAttempts() {
    const round = state.currentRound;
    const roundProgress = getRoundProgress(state.activeChapter.slug, round.roundId);
    const attempts = roundProgress?.attempts || [];

    elements.historyStatus.textContent = attempts.length === 0 ? "Chưa có lượt đoán" : `${attempts.length} lượt đã ghi`;

    if (attempts.length === 0) {
      elements.attemptHistory.innerHTML = `
        <div class="rounded-[1.5rem] bg-slate-50 px-4 py-4 text-sm text-slate-500">
          Hãy nhập dự đoán đầu tiên của bạn. Hệ thống sẽ phản hồi theo từng từ trong cụm.
        </div>
      `;
      return;
    }

    elements.attemptHistory.innerHTML = attempts
      .map((attempt, index) => {
        const columns = `repeat(${round.wordCount}, minmax(0, 1fr))`;
        const tiles = attempt.feedback
          .map(
            (item) => `
              <div class="token-tile ${item.status}">
                ${item.token || "—"}
              </div>
            `,
          )
          .join("");

        return `
          <div class="attempt-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-center justify-between gap-4">
              <div class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Lượt ${index + 1}</div>
              <div class="text-xs font-semibold ${attempt.isCorrect ? "text-emerald-700" : "text-slate-500"}">
                ${attempt.isCorrect ? `+${attempt.score} điểm` : "Chưa đúng"}
              </div>
            </div>
            <div class="token-grid mt-4" style="grid-template-columns: ${columns};">
              ${tiles}
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderHintPanel() {
    const round = state.currentRound;
    if (state.hintShown) {
      elements.hintPanel.innerHTML = `
        <div class="text-xs font-bold uppercase tracking-[0.16em] text-primary">Hint</div>
        <div class="mt-2 text-sm leading-6 text-slate-700">${round.hint || "Round này chưa có hint phụ."}</div>
      `;
      return;
    }

    elements.hintPanel.textContent = "Nhấn “Xem gợi ý” để mở thêm manh mối cho round hiện tại.";
  }

  function renderResultPanel() {
    const round = state.currentRound;
    const roundProgress = getRoundProgress(state.activeChapter.slug, round.roundId);
    const latestAttempt = roundProgress?.attempts?.[roundProgress.attempts.length - 1];

    if (!latestAttempt || (!roundProgress.isCompleted && !roundProgress.isFailed)) {
      elements.resultPanel.classList.add("hidden");
      return;
    }

    const title = roundProgress.isCompleted ? "Giải đúng" : "Đã hết lượt";
    const tone = roundProgress.isCompleted
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : "border-amber-200 bg-amber-50 text-amber-950";
    elements.resultPanel.className = `rounded-[2rem] border px-5 py-4 text-sm leading-7 shadow-sm ${tone}`;
    elements.resultPanel.innerHTML = `
      <div class="text-xs font-bold uppercase tracking-[0.16em]">${title}</div>
      <div class="mt-2 text-lg font-bold">${latestAttempt.answer || round.answer || "Đáp án"}</div>
      <p class="mt-2">${latestAttempt.explanation || "Chưa có giải thích cho round này."}</p>
      <div class="mt-3 text-xs font-semibold">Điểm nhận được: ${latestAttempt.score}</div>
    `;
    elements.resultPanel.classList.remove("hidden");
  }

  async function submitGuess() {
    if (!state.activeChapter || !state.currentRound) {
      return;
    }

    const chapterSlug = state.activeChapter.slug;
    const roundId = state.currentRound.roundId;
    const roundProgress = getOrCreateRoundProgress(chapterSlug, roundId);

    if (roundProgress.isCompleted || roundProgress.isFailed) {
      showMessage("Round này đã kết thúc rồi. Hãy chọn round khác hoặc chơi lại.", "info");
      return;
    }

    const guess = elements.guessInput.value.trim();
    const attemptNumber = roundProgress.attempts.length + 1;

    try {
      const response = await fetch(`/api/wordle/chapters/${chapterSlug}/rounds/${roundId}/guess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guess,
          attemptNumber,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Không gửi được lượt đoán.");
      }

      roundProgress.attempts.push({
        guess,
        normalizedGuess: result.normalizedGuess,
        feedback: result.feedback,
        isCorrect: result.isCorrect,
        score: result.score,
        answer: result.answer,
        explanation: result.explanation,
        attemptedAt: Date.now(),
      });

      if (result.isCorrect) {
        roundProgress.isCompleted = true;
        roundProgress.score = result.score;
        const chapterProgress = getChapterProgress(chapterSlug);
        if (!chapterProgress.completedRoundIds.includes(roundId)) {
          chapterProgress.completedRoundIds.push(roundId);
        }
        chapterProgress.score += result.score;
        showMessage("Chính xác! Round này đã được lưu vào tiến độ của bạn.", "success");
      } else if (result.remainingAttempts === 0) {
        roundProgress.isFailed = true;
        roundProgress.score = 0;
        showMessage("Bạn đã dùng hết lượt cho round này. Đáp án đã được mở.", "warning");
      } else {
        showMessage(
          `Chưa đúng. Bạn còn ${result.remainingAttempts} lượt để thử lại.`,
          "warning",
        );
      }

      persistProgress();
      renderCurrentRound();
      renderRoundList();
      renderChapterCards();
      elements.guessInput.focus();
    } catch (error) {
      showMessage(error.message, "error");
    }
  }

  function revealHint() {
    if (!state.currentRound) {
      return;
    }

    state.hintShown = true;
    elements.roundHintPreview.textContent = state.currentRound.hint || "Round này chưa có hint phụ.";
    renderHintPanel();
  }

  function resetCurrentRound() {
    if (!state.activeChapter || !state.currentRound) {
      return;
    }

    const chapterSlug = state.activeChapter.slug;
    const roundId = state.currentRound.roundId;
    const chapterProgress = getChapterProgress(chapterSlug);
    const roundProgress = getRoundProgress(chapterSlug, roundId);

    if (roundProgress?.isCompleted) {
      chapterProgress.completedRoundIds = chapterProgress.completedRoundIds.filter((id) => id !== roundId);
      chapterProgress.score = Math.max(0, chapterProgress.score - (roundProgress.score || 0));
    }

    delete chapterProgress.rounds[roundId];
    persistProgress();
    state.hintShown = false;
    renderCurrentRound();
    renderRoundList();
    renderChapterCards();
    showMessage("Đã xóa lịch sử của round hiện tại để bạn chơi lại từ đầu.", "info");
  }

  function updateChapterStats() {
    if (!state.activeChapter) {
      return;
    }

    const chapterProgress = getChapterProgress(state.activeChapter.slug);
    elements.chapterScore.textContent = `${chapterProgress.score}`;
    elements.chapterCompleted.textContent = `${chapterProgress.completedRoundIds.length}/${state.activeChapter.totalRounds}`;
  }

  function getChapterProgress(chapterSlug) {
    if (!state.progress[chapterSlug]) {
      state.progress[chapterSlug] = {
        completedRoundIds: [],
        currentRoundId: null,
        rounds: {},
        score: 0,
        updatedAt: Date.now(),
      };
    }

    return state.progress[chapterSlug];
  }

  function getRoundProgress(chapterSlug, roundId) {
    return getChapterProgress(chapterSlug).rounds[roundId] || null;
  }

  function getOrCreateRoundProgress(chapterSlug, roundId) {
    const chapterProgress = getChapterProgress(chapterSlug);
    if (!chapterProgress.rounds[roundId]) {
      chapterProgress.rounds[roundId] = {
        attempts: [],
        isCompleted: false,
        isFailed: false,
        score: 0,
      };
    }

    return chapterProgress.rounds[roundId];
  }

  function persistProgress() {
    if (state.activeChapter) {
      const chapterProgress = getChapterProgress(state.activeChapter.slug);
      chapterProgress.updatedAt = Date.now();
      chapterProgress.currentRoundId = state.currentRound ? state.currentRound.roundId : chapterProgress.currentRoundId;
    }

    localStorage.setItem(storageKey, JSON.stringify(state.progress));
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch (error) {
      console.warn("Không đọc được tiến độ Wordle:", error);
      return {};
    }
  }

  function updateQueryString(chapterSlug, roundId) {
    const params = new URLSearchParams();
    params.set("chapter", chapterSlug);
    if (roundId) {
      params.set("round", roundId);
    }
    window.history.replaceState({}, "", `wordle-game.html?${params.toString()}`);
  }

  function showMessage(message, variant) {
    const styles = {
      info: "border-blue-200 bg-blue-50 text-blue-800",
      warning: "border-amber-200 bg-amber-50 text-amber-900",
      success: "border-emerald-200 bg-emerald-50 text-emerald-800",
      error: "border-rose-200 bg-rose-50 text-rose-800",
    };

    elements.messagePanel.className = `rounded-[2rem] border px-5 py-4 text-sm font-medium shadow-sm ${styles[variant] || styles.info}`;
    elements.messagePanel.textContent = message;
    elements.messagePanel.classList.remove("hidden");
  }

  function hideMessage() {
    elements.messagePanel.classList.add("hidden");
  }
})();
