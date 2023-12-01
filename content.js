// Enters fullscreen without toolbar
function perfectFullscreen() {
  console.log("document.documentElement");
  const documentElement = document.documentElement;

  if (documentElement.requestFullscreen) {
    documentElement.requestFullscreen();
  } else if (documentElement.mozRequestFullScreen) {
    documentElement.mozRequestFullScreen();
  } else if (documentElement.webkitRequestFullscreen) {
    documentElement.webkitRequestFullscreen();
  }
}

const popup = document.createElement("div");
const popupId = "perfect-fullscreen-popup";
popup.setAttribute("id", popupId);
popup.setAttribute(
  "style",
  `
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  
  background-color: black;
  opacity: 0.9;
`
);
popup.addEventListener("click", () => {
  perfectFullscreen();
  closePopup();
});

const popupText = document.createElement("p");
popupText.setAttribute(
  "style",
  `
  text-align: center;
`
);
popupText.innerText = "Click to confirm fullscreen\nPress escape to cancel";
popup.appendChild(popupText);

// Remove popup on manual fullscreen ans escape
document.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement) {
    closePopup();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
});

function openPopup() {
  if (document.getElementById(popupId)) {
    return;
  }

  document.body.appendChild(popup);
  document.body.setAttribute("style", "overflow: hidden");
}

function closePopup() {
  if (!document.getElementById(popupId)) {
    return;
  }

  document.body.removeChild(popup);
  document.body.setAttribute("style", "overflow: auto");
}

function togglePopup() {
  if (document.getElementById(popupId)) {
    closePopup();
  } else {
    openPopup();
  }
}

if (typeof browser !== "undefined") {
  // Firefox
  browser.runtime.onMessage.addListener((msg) => {
    if (msg.command === "toggle") {
      togglePopup();
    }
  });
} else if (typeof chrome !== "undefined") {
  // Chrome and other Chromium-based browsers
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.command === "toggle") {
      togglePopup();
    }
  });
}

// Enters fullscreen without toolbar
function perfectFullscreen() {
  const documentElement = document.documentElement;

  if (documentElement.requestFullscreen) {
    documentElement.requestFullscreen();
  } else if (documentElement.mozRequestFullScreen) {
    documentElement.mozRequestFullScreen();
  } else if (documentElement.webkitRequestFullscreen) {
    documentElement.webkitRequestFullscreen();
  }
}

// Retrive document
if (typeof browser !== "undefined") {
  // Firefox
  browser.runtime.onMessage.addListener(function (msg, sender) {
    if (msg.text === "fullscreen") {
      //
    }
  });
} else if (typeof chrome !== "undefined") {
  // Chrome and other Chromium-based browsers
  chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg.text === "fullscreen") {
      //
    }
  });
}
