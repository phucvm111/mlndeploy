const { crosswordChapters } = require("../data/crosswordChapters.seed");
const { generateCrossword } = require("../utils/crosswordGenerator");
const { normalizeVietnamese } = require("../utils/normalizeVietnamese");

validateSeedData(crosswordChapters);

function getAllCrosswordChapters() {
  return crosswordChapters
    .filter((chapter) => chapter.isActive)
    .map((chapter) => {
      const difficulties = chapter.entries.map((entry) => entry.difficulty);

      return {
        slug: chapter.slug,
        chapterNumber: chapter.chapterNumber,
        title: chapter.title,
        description: chapter.description,
        totalEntries: chapter.entries.length,
        difficultyRange: {
          min: Math.min(...difficulties),
          max: Math.max(...difficulties),
        },
      };
    });
}

function getCrosswordChapterBySlug(slug) {
  return crosswordChapters.find(
    (chapter) => chapter.slug === slug && chapter.isActive,
  );
}

function getPlayableCrosswordBySlug(slug) {
  const chapter = getCrosswordChapterBySlug(slug);

  if (!chapter) {
    return null;
  }

  const puzzle = generateCrossword(chapter.entries, chapter.gridConfig);

  return {
    slug: chapter.slug,
    chapterNumber: chapter.chapterNumber,
    title: chapter.title,
    description: chapter.description,
    source: chapter.source,
    gridConfig: chapter.gridConfig,
    totalEntries: chapter.entries.length,
    placedEntries: puzzle.placedEntries.map((entry) => ({
      id: entry.id,
      answer: entry.answer,
      displayAnswer: entry.displayAnswer,
      clue: entry.clue,
      hint: entry.hint,
      category: entry.category,
      difficulty: entry.difficulty,
      row: entry.row,
      col: entry.col,
      direction: entry.direction,
      number: entry.number,
    })),
    unplacedEntries: puzzle.unplacedEntries.map((entry) => ({
      id: entry.id,
      answer: entry.answer,
      displayAnswer: entry.displayAnswer,
      clue: entry.clue,
      hint: entry.hint,
      category: entry.category,
      difficulty: entry.difficulty,
    })),
    grid: puzzle.grid,
  };
}

function validateSeedData(chapters) {
  const seenSlugs = new Set();

  chapters.forEach((chapter) => {
    if (seenSlugs.has(chapter.slug)) {
      throw new Error(`Duplicate crossword slug: ${chapter.slug}`);
    }

    seenSlugs.add(chapter.slug);

    if (![1, 2, 3].includes(chapter.chapterNumber)) {
      throw new Error(`Invalid chapter number: ${chapter.chapterNumber}`);
    }

    if (!Array.isArray(chapter.entries) || chapter.entries.length < 10) {
      throw new Error(`Chapter ${chapter.slug} must have at least 10 entries`);
    }

    const entryIds = new Set();

    chapter.entries.forEach((entry) => {
      if (entryIds.has(entry.id)) {
        throw new Error(`Duplicate entry id in ${chapter.slug}: ${entry.id}`);
      }

      entryIds.add(entry.id);

      const normalized = normalizeVietnamese(entry.displayAnswer);
      if (!entry.answer || !/^[A-Z0-9]+$/.test(entry.answer)) {
        throw new Error(`Invalid answer format for ${entry.id}`);
      }

      if (!entry.displayAnswer || !entry.clue) {
        throw new Error(`Entry ${entry.id} must include displayAnswer and clue`);
      }

      if (![1, 2, 3].includes(entry.difficulty)) {
        throw new Error(`Invalid difficulty for ${entry.id}`);
      }

      if (entry.answer !== normalized) {
        throw new Error(
          `Answer normalization mismatch for ${entry.id}: expected ${normalized}, got ${entry.answer}`,
        );
      }
    });
  });
}

module.exports = {
  getAllCrosswordChapters,
  getCrosswordChapterBySlug,
  getPlayableCrosswordBySlug,
};
