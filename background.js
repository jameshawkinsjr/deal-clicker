chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(tab.id, { file: "content.js" });
});
