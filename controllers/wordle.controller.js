const wordleService = require("../services/wordle.service");

function listWordleChapters(req, res) {
  try {
    res.json(wordleService.getAllWordleChapters());
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
}

function getWordleChapter(req, res) {
  try {
    res.json(wordleService.getWordleChapterMetadata(req.params.slug));
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
}

function getRandomWordleRound(req, res) {
  try {
    const excludeRoundIds = String(req.query.excludeRoundIds || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    res.json(
      wordleService.getRandomRoundByChapterSlug(req.params.slug, {
        excludeRoundIds,
      }),
    );
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
}

function submitWordleGuess(req, res) {
  try {
    const { guess, attemptNumber } = req.body || {};
    res.json(
      wordleService.evaluateGuess(
        req.params.slug,
        req.params.roundId,
        guess,
        attemptNumber,
      ),
    );
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
}

module.exports = {
  getRandomWordleRound,
  getWordleChapter,
  listWordleChapters,
  submitWordleGuess,
};
