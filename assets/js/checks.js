/**
 * @file checks.js
 * @author Moe
 * @license GPL-3.0
 */

if (navigator.userAgent !== "BDP (http://example.com), v0.0.1") {
  warnNotification("Please note if you encounter an 'Invalid Token' issue, set User Agent to 'BDP (http://example.com), v0.0.1'. Visit <a href='https://github.com/itsmoe15/itsmoe15/blob/main/DiscordSledgeHammerPortal_Tokenissue.md'>Our epository</a> for more information.")
} else {
  successNotification("All checks passed successfully.")
}

