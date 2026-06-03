const express = require("express");
const wordleController = require("../controllers/wordle.controller");

const router = express.Router();

router.get("/chapters", wordleController.listWordleChapters);
router.get("/chapters/:slug", wordleController.getWordleChapter);
router.get("/chapters/:slug/random", wordleController.getRandomWordleRound);
router.post(
  "/chapters/:slug/rounds/:roundId/guess",
  wordleController.submitWordleGuess,
);

module.exports = router;
