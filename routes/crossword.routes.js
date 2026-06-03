const express = require("express");
const crosswordController = require("../controllers/crossword.controller");

const router = express.Router();

router.get("/chapters", crosswordController.getAllChapters);
router.get("/chapters/:slug", crosswordController.getChapterBySlug);
router.get("/chapters/:slug/play", crosswordController.getPlayableChapter);

module.exports = router;
