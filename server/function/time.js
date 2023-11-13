const getCurrentTime = (lang, timezone) => {
  const now = new Date();
  const options = { timeZone: timezone };
  const estDateTime = now.toLocaleString(lang, options);
  return estDateTime;
};

module.exports = {
  getCurrentTime: getCurrentTime,
};
