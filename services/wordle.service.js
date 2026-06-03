const { wordleChapters } = require("../data/wordleChapters.seed");
const { evaluatePhraseGuess } = require("../utils/phraseWordleEvaluator");
const { normalizeVietnamese, tokenizePhrase } = require("../utils/normalizeVietnamese");

validateSeedData(wordleChapters);

function getAllWordleChapters() {
  return wordleChapters
    .filter((chapter) => chapter.isActive)
    .map((chapter) => ({
      slug: chapter.slug,
      chapterNumber: chapter.chapterNumber,
      title: chapter.title,
      description: chapter.description,
      totalRounds: chapter.rounds.length,
    }));
}

function getWordleChapterBySlug(slug) {
  return wordleChapters.find(
    (chapter) => chapter.slug === slug && chapter.isActive,
  );
}

function getWordleChapterMetadata(slug) {
  const chapter = getWordleChapterBySlug(slug);

  if (!chapter) {
    throw createError(404, "Wordle chapter not found");
  }

  return {
    slug: chapter.slug,
    chapterNumber: chapter.chapterNumber,
    title: chapter.title,
    description: chapter.description,
    source: chapter.source,
    totalRounds: chapter.rounds.length,
    rounds: chapter.rounds.map((round) => summarizeRound(chapter, round)),
  };
}

function getRandomRoundByChapterSlug(slug, options = {}) {
  const chapter = getWordleChapterBySlug(slug);

  if (!chapter) {
    throw createError(404, "Wordle chapter not found");
  }

  const excludedIds = new Set(
    Array.isArray(options.excludeRoundIds) ? options.excludeRoundIds : [],
  );
  const availableRounds = chapter.rounds.filter((round) => !excludedIds.has(round.id));
  const sourceRounds = availableRounds.length > 0 ? availableRounds : chapter.rounds;
  const round = sourceRounds[Math.floor(Math.random() * sourceRounds.length)];

  return summarizeRound(chapter, round);
}

function getRoundById(chapterSlug, roundId) {
  const chapter = getWordleChapterBySlug(chapterSlug);

  if (!chapter) {
    throw createError(404, "Wordle chapter not found");
  }

  const round = chapter.rounds.find((item) => item.id === roundId);

  if (!round) {
    throw createError(404, "Wordle round not found");
  }

  return {
    chapter,
    round,
  };
}

function evaluateGuess(chapterSlug, roundId, userGuess, attemptNumber) {
  const { chapter, round } = getRoundById(chapterSlug, roundId);
  const rawGuess = String(userGuess || "").trim();

  if (!rawGuess) {
    throw createError(400, "Guess is required");
  }

  if (/[^0-9A-Za-zÀ-ỹà-ỹĐđ\s\-]/u.test(rawGuess)) {
    throw createError(400, "Guess contains unsupported characters");
  }

  const normalizedGuess = normalizeVietnamese(rawGuess, { preserveSpaces: true });
  const guessTokens = tokenizePhrase(rawGuess);

  if (guessTokens.length === 0) {
    throw createError(400, "Guess is required");
  }

  if (guessTokens.length > 12) {
    throw createError(400, "Guess is too long");
  }

  if (guessTokens.length !== round.tokens.length) {
    throw createError(
      400,
      `Guess must contain exactly ${round.tokens.length} words`,
    );
  }

  const parsedAttemptNumber = Number(attemptNumber);
  if (!Number.isInteger(parsedAttemptNumber) || parsedAttemptNumber < 1) {
    throw createError(400, "Attempt number is invalid");
  }

  const feedback = evaluatePhraseGuess(round.tokens, guessTokens);
  const isCorrect = feedback.every((item) => item.status === "correct");
  const hasExhaustedAttempts = parsedAttemptNumber >= round.maxAttempts;
  const shouldRevealAnswer = isCorrect || hasExhaustedAttempts;

  return {
    chapterSlug: chapter.slug,
    roundId: round.id,
    normalizedGuess,
    tokens: guessTokens,
    feedback,
    isCorrect,
    maxAttempts: round.maxAttempts,
    remainingAttempts: Math.max(0, round.maxAttempts - parsedAttemptNumber),
    score: calculateScore(isCorrect, parsedAttemptNumber),
    answer: shouldRevealAnswer ? round.targetPhrase : null,
    explanation: shouldRevealAnswer ? round.explanation : null,
    category: round.category,
    difficulty: round.difficulty,
  };
}

function summarizeRound(chapter, round) {
  return {
    chapterSlug: chapter.slug,
    chapterTitle: chapter.title,
    roundId: round.id,
    clue: round.clue,
    hint: round.hint,
    wordCount: round.tokens.length,
    maxAttempts: round.maxAttempts,
    difficulty: round.difficulty,
    category: round.category,
  };
}

function calculateScore(isCorrect, attemptNumber) {
  if (!isCorrect) {
    return 0;
  }

  const scores = {
    1: 100,
    2: 80,
    3: 60,
    4: 40,
    5: 20,
  };

  return scores[attemptNumber] || 10;
}

function validateSeedData(chapters) {
  const chapterSlugs = new Set();

  chapters.forEach((chapter) => {
    if (chapterSlugs.has(chapter.slug)) {
      throw new Error(`Duplicate wordle slug: ${chapter.slug}`);
    }

    chapterSlugs.add(chapter.slug);

    if (![1, 2, 3].includes(chapter.chapterNumber)) {
      throw new Error(`Invalid chapter number: ${chapter.chapterNumber}`);
    }

    if (!Array.isArray(chapter.rounds) || chapter.rounds.length < 10) {
      throw new Error(`Chapter ${chapter.slug} must have at least 10 rounds`);
    }

    const roundIds = new Set();

    chapter.rounds.forEach((round) => {
      if (roundIds.has(round.id)) {
        throw new Error(`Duplicate round id in ${chapter.slug}: ${round.id}`);
      }

      roundIds.add(round.id);

      const normalizedTarget = normalizeVietnamese(round.targetPhrase, {
        preserveSpaces: true,
      });
      const tokens = tokenizePhrase(round.targetPhrase);

      if (!round.targetPhrase || !round.clue) {
        throw new Error(`Round ${round.id} must include targetPhrase and clue`);
      }

      if (round.normalizedTarget !== normalizedTarget) {
        throw new Error(
          `Round ${round.id} has invalid normalizedTarget: expected ${normalizedTarget}`,
        );
      }

      if (JSON.stringify(round.tokens) !== JSON.stringify(tokens)) {
        throw new Error(`Round ${round.id} has invalid tokens`);
      }

      if (![1, 2, 3].includes(round.difficulty)) {
        throw new Error(`Round ${round.id} has invalid difficulty`);
      }

      if (!Number.isInteger(round.maxAttempts) || round.maxAttempts < 5 || round.maxAttempts > 8) {
        throw new Error(`Round ${round.id} has invalid maxAttempts`);
      }
    });
  });
}

function createError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

module.exports = {
  calculateScore,
  evaluateGuess,
  getAllWordleChapters,
  getRandomRoundByChapterSlug,
  getRoundById,
  getWordleChapterBySlug,
  getWordleChapterMetadata,
};
