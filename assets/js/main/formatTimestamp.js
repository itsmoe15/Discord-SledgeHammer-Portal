/**
 * @file formatTimestamp.js
 * @author Moe
 * @license GPL-3.0
 */

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString(
      translation.langCode,
  )} ${date.toLocaleTimeString(translation.langCode)}`;
}
