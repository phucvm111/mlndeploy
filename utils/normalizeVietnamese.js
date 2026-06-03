function normalizeVietnamese(input, options = {}) {
  const preserveSpaces = Boolean(options.preserveSpaces);
  let normalized = String(input || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

  if (preserveSpaces) {
    normalized = normalized
      .replace(/[^a-zA-Z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  } else {
    normalized = normalized.replace(/[^a-zA-Z0-9]/g, "");
  }

  return normalized.toUpperCase();
}

function tokenizePhrase(input) {
  const normalized = normalizeVietnamese(input, { preserveSpaces: true });
  return normalized ? normalized.split(" ") : [];
}

module.exports = {
  normalizeVietnamese,
  tokenizePhrase,
};
