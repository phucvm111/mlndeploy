function evaluatePhraseGuess(targetTokens, guessTokens) {
  const target = Array.isArray(targetTokens) ? targetTokens : [];
  const guess = Array.isArray(guessTokens) ? guessTokens : [];
  const result = [];
  const targetTokenCounts = {};

  for (let index = 0; index < target.length; index += 1) {
    const targetToken = target[index];

    if (guess[index] === targetToken) {
      result[index] = {
        token: guess[index] || "",
        status: "correct",
      };
    } else {
      targetTokenCounts[targetToken] = (targetTokenCounts[targetToken] || 0) + 1;
    }
  }

  for (let index = 0; index < target.length; index += 1) {
    if (result[index]) {
      continue;
    }

    const guessToken = guess[index] || "";

    if (!guessToken) {
      result[index] = {
        token: "",
        status: "empty",
      };
    } else if (targetTokenCounts[guessToken] > 0) {
      result[index] = {
        token: guessToken,
        status: "present",
      };
      targetTokenCounts[guessToken] -= 1;
    } else {
      result[index] = {
        token: guessToken,
        status: "absent",
      };
    }
  }

  return result;
}

module.exports = {
  evaluatePhraseGuess,
};
