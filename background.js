// send url information to content
chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.insertCSS(null, { file: "./content.css" });
    tabs.forEach((tab) => {
      let tabUrl = tab.url;
      let tabId = tab.id;
      chrome.tabs.sendMessage(tabId, { tabUrl });
    });
  });
});
