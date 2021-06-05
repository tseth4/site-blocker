// send url information to content
chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    chrome.tabs.insertCSS(null, { file: "./content.css" });
    console.log(current_tab_info);
    let tabUrl = current_tab_info.url;
    let tabId = current_tab_info.id;
    chrome.tabs.sendMessage(tabId, { tabUrl });
  });
});
