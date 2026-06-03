const crosswordService = require("../services/crossword.service");

function getAllChapters(req, res) {
  try {
    res.json(crosswordService.getAllCrosswordChapters());
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

function getChapterBySlug(req, res) {
  try {
    const chapter = crosswordService.getCrosswordChapterBySlug(req.params.slug);

    if (!chapter) {
      return res.status(404).json({ message: "Crossword chapter not found" });
    }

    return res.json(chapter);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

function getPlayableChapter(req, res) {
  try {
    const crossword = crosswordService.getPlayableCrosswordBySlug(req.params.slug);

    if (!crossword) {
      return res.status(404).json({ message: "Crossword chapter not found" });
    }

    return res.json(crossword);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllChapters,
  getChapterBySlug,
  getPlayableChapter,
};
