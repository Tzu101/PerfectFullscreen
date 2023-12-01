// Sets the correct theme icon
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Toolbar click detect
if (typeof browser !== "undefined") {
  // Firefox
  browser.browserAction.setIcon({
    path: {
      48: isDarkMode ? "icons/icon-dark.svg" : "icons/icon-light.svg",
    },
  });

  browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.sendMessage(tab.id, { command: "toggle" });
  });
} else if (typeof chrome !== "undefined") {
  // Chrome and other Chromium-based browsers
  chrome.browserAction.setIcon({
    path: {
      48: isDarkMode ? "icons/icon-dark.svg" : "icons/icon-light.svg",
    },
  });

  chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { command: "toggle" });
  });
}
