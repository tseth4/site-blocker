console.log("hello from content");

chrome.runtime.onMessage.addListener((request) => {
  let blockedHtmlUrl = chrome.extension.getURL("blocked.html");
  chrome.storage.local.get("blockedSites", (response) => {
    response.blockedSites.forEach((e) => {
      let regex = new RegExp(e);
      if (regex.test(request.tabUrl)) {
        window.location.href = blockedHtmlUrl;
      } else {
        console.log("allowed site")
      }
    });
  });
});

