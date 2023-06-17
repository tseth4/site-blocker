chrome.tabs.onActivated.addListener(async (tab) => {
  console.log("tabs.activeated");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("tabs: ", tabs)
    chrome.tabs.sendMessage(tabs[0].id, { tabUrl: tabs[0].url })
  });
});

chrome.tabs.onUpdated.addListener(async (tab) => {
  console.log("tabs.onUpdated");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("tabs: ", tabs)
    chrome.tabs.sendMessage(tabs[0].id, { tabUrl: tabs[0].url })
  });
});

