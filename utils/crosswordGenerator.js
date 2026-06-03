function generateCrossword(entries, gridConfig = {}) {
  const minSize = gridConfig.minSize || 12;
  const maxSize = gridConfig.maxSize || Math.max(minSize, 20);
  const baseEntries = entries
    .filter((entry) => entry.answer && entry.answer.length > 1)
    .map((entry) => ({ ...entry, answer: entry.answer.toUpperCase() }));

  let bestResult = null;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const gridSize = Math.min(maxSize, minSize + attempt * 2);
    const sortedEntries = orderEntries(baseEntries, attempt);
    const attemptResult = tryGenerate(sortedEntries, gridSize);

    if (!bestResult || attemptResult.placedEntries.length > bestResult.placedEntries.length) {
      bestResult = attemptResult;
    }

    const placementRatio =
      baseEntries.length === 0
        ? 0
        : attemptResult.placedEntries.length / baseEntries.length;

    if (placementRatio >= 0.6) {
      return attemptResult;
    }
  }

  return bestResult || emptyResult();
}

function tryGenerate(entries, gridSize) {
  const grid = createGrid(gridSize);
  const placedEntries = [];
  const unplacedEntries = [];

  if (entries.length === 0) {
    return emptyResult();
  }

  const firstEntry = entries[0];
  const startRow = Math.floor(gridSize / 2);
  const startCol = Math.max(0, Math.floor((gridSize - firstEntry.answer.length) / 2));

  if (!canPlaceWord(grid, firstEntry.answer, startRow, startCol, "across")) {
    return emptyResult();
  }

  placeWord(grid, firstEntry, startRow, startCol, "across");
  placedEntries.push({
    ...firstEntry,
    row: startRow,
    col: startCol,
    direction: "across",
  });

  for (let index = 1; index < entries.length; index += 1) {
    const entry = entries[index];
    const placement = findBestPlacement(grid, placedEntries, entry);

    if (!placement) {
      unplacedEntries.push(entry);
      continue;
    }

    placeWord(grid, entry, placement.row, placement.col, placement.direction);
    placedEntries.push({
      ...entry,
      row: placement.row,
      col: placement.col,
      direction: placement.direction,
    });
  }

  return finalizeResult(grid, placedEntries, unplacedEntries);
}

function createGrid(size) {
  return Array.from({ length: size }, () => Array(size).fill(""));
}

function emptyResult() {
  return {
    grid: [],
    placedEntries: [],
    unplacedEntries: [],
  };
}

function orderEntries(entries, attempt) {
  const sorted = [...entries].sort((left, right) => right.answer.length - left.answer.length);

  if (attempt === 0) {
    return sorted;
  }

  const rotated = sorted.slice(attempt).concat(sorted.slice(0, attempt));
  return rotated.sort((left, right) => {
    if (left.answer.length !== right.answer.length) {
      return right.answer.length - left.answer.length;
    }

    return attempt % 2 === 0
      ? left.answer.localeCompare(right.answer)
      : right.answer.localeCompare(left.answer);
  });
}

function findBestPlacement(grid, placedEntries, entry) {
  let bestPlacement = null;

  for (const placedEntry of placedEntries) {
    for (let currentIndex = 0; currentIndex < entry.answer.length; currentIndex += 1) {
      const currentLetter = entry.answer[currentIndex];

      for (
        let placedIndex = 0;
        placedIndex < placedEntry.answer.length;
        placedIndex += 1
      ) {
        if (placedEntry.answer[placedIndex] !== currentLetter) {
          continue;
        }

        const direction =
          placedEntry.direction === "across" ? "down" : "across";
        const intersectionRow =
          placedEntry.direction === "across"
            ? placedEntry.row
            : placedEntry.row + placedIndex;
        const intersectionCol =
          placedEntry.direction === "across"
            ? placedEntry.col + placedIndex
            : placedEntry.col;

        const row =
          direction === "across"
            ? intersectionRow
            : intersectionRow - currentIndex;
        const col =
          direction === "across"
            ? intersectionCol - currentIndex
            : intersectionCol;

        if (!canPlaceWord(grid, entry.answer, row, col, direction)) {
          continue;
        }

        const placement = {
          row,
          col,
          direction,
          intersections: 1,
          score: countIntersections(grid, entry.answer, row, col, direction),
        };

        if (!bestPlacement || placement.score > bestPlacement.score) {
          bestPlacement = placement;
        }
      }
    }
  }

  if (bestPlacement) {
    return bestPlacement;
  }

  return findOpenPlacement(grid, entry.answer);
}

function findOpenPlacement(grid, answer) {
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (canPlaceWord(grid, answer, row, col, "across")) {
        return { row, col, direction: "across", score: 0 };
      }

      if (canPlaceWord(grid, answer, row, col, "down")) {
        return { row, col, direction: "down", score: 0 };
      }
    }
  }

  return null;
}

function canPlaceWord(grid, answer, row, col, direction) {
  if (direction === "across") {
    if (row < 0 || row >= grid.length || col < 0 || col + answer.length > grid.length) {
      return false;
    }
  } else if (row < 0 || row + answer.length > grid.length || col < 0 || col >= grid.length) {
    return false;
  }

  const deltaRow = direction === "across" ? 0 : 1;
  const deltaCol = direction === "across" ? 1 : 0;
  const beforeRow = row - deltaRow;
  const beforeCol = col - deltaCol;
  const afterRow = row + deltaRow * answer.length;
  const afterCol = col + deltaCol * answer.length;

  if (isFilled(grid, beforeRow, beforeCol) || isFilled(grid, afterRow, afterCol)) {
    return false;
  }

  for (let index = 0; index < answer.length; index += 1) {
    const currentRow = row + deltaRow * index;
    const currentCol = col + deltaCol * index;
    const existing = grid[currentRow][currentCol];
    const letter = answer[index];

    if (existing && existing !== letter) {
      return false;
    }

    if (!existing) {
      if (direction === "across") {
        if (isFilled(grid, currentRow - 1, currentCol) || isFilled(grid, currentRow + 1, currentCol)) {
          return false;
        }
      } else if (isFilled(grid, currentRow, currentCol - 1) || isFilled(grid, currentRow, currentCol + 1)) {
        return false;
      }
    }
  }

  return true;
}

function countIntersections(grid, answer, row, col, direction) {
  const deltaRow = direction === "across" ? 0 : 1;
  const deltaCol = direction === "across" ? 1 : 0;
  let intersections = 0;

  for (let index = 0; index < answer.length; index += 1) {
    const currentRow = row + deltaRow * index;
    const currentCol = col + deltaCol * index;

    if (grid[currentRow][currentCol] === answer[index]) {
      intersections += 1;
    }
  }

  return intersections;
}

function placeWord(grid, entry, row, col, direction) {
  const deltaRow = direction === "across" ? 0 : 1;
  const deltaCol = direction === "across" ? 1 : 0;

  for (let index = 0; index < entry.answer.length; index += 1) {
    const currentRow = row + deltaRow * index;
    const currentCol = col + deltaCol * index;
    grid[currentRow][currentCol] = entry.answer[index];
  }
}

function finalizeResult(grid, placedEntries, unplacedEntries) {
  const trimmed = trimGrid(grid, placedEntries);
  const numberedEntries = assignNumbers(trimmed.placedEntries);

  return {
    grid: trimmed.grid,
    placedEntries: numberedEntries,
    unplacedEntries,
  };
}

function trimGrid(grid, placedEntries) {
  const occupiedRows = [];
  const occupiedCols = [];

  placedEntries.forEach((entry) => {
    for (let index = 0; index < entry.answer.length; index += 1) {
      const row = entry.direction === "across" ? entry.row : entry.row + index;
      const col = entry.direction === "across" ? entry.col + index : entry.col;
      occupiedRows.push(row);
      occupiedCols.push(col);
    }
  });

  const minRow = Math.min(...occupiedRows);
  const maxRow = Math.max(...occupiedRows);
  const minCol = Math.min(...occupiedCols);
  const maxCol = Math.max(...occupiedCols);

  const trimmedGrid = [];

  for (let row = minRow; row <= maxRow; row += 1) {
    const nextRow = [];

    for (let col = minCol; col <= maxCol; col += 1) {
      nextRow.push(grid[row][col]);
    }

    trimmedGrid.push(nextRow);
  }

  const trimmedEntries = placedEntries.map((entry) => ({
    ...entry,
    row: entry.row - minRow,
    col: entry.col - minCol,
  }));

  return {
    grid: trimmedGrid,
    placedEntries: trimmedEntries,
  };
}

function assignNumbers(placedEntries) {
  const positionMap = new Map();
  let nextNumber = 1;

  const sorted = [...placedEntries].sort((left, right) => {
    if (left.row !== right.row) {
      return left.row - right.row;
    }

    return left.col - right.col;
  });

  return sorted.map((entry) => {
    const key = `${entry.row}:${entry.col}`;

    if (!positionMap.has(key)) {
      positionMap.set(key, nextNumber);
      nextNumber += 1;
    }

    return {
      ...entry,
      number: positionMap.get(key),
    };
  });
}

function isFilled(grid, row, col) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid.length) {
    return false;
  }

  return Boolean(grid[row][col]);
}

module.exports = {
  generateCrossword,
};
