// send url information to content
chrome.tabs.onUpdated.addListener((tab) => {
  console.log("onUpdated");
  console.log(tab);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.insertCSS(null, { file: "./content.css" });
    tabs.forEach((tab) => {
      let tabUrl = tab.url;
      let tabId = tab.id;
      chrome.tabs.sendMessage(tabId, { tabUrl });
    });
  });

  // chrome.tabs.get(tab.tabId, (current_tab_info) => {
  //   chrome.tabs.insertCSS(null, { file: "./content.css" });
  //   console.log(current_tab_info);
  //   let tabUrl = current_tab_info.url;
  //   let tabId = current_tab_info.id;
  //   chrome.tabs.sendMessage(tabId, { tabUrl });
  // });
});
