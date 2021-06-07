console.log("content jay es");
chrome.runtime.onMessage.addListener((request) => {
  let blockedHtmlUrl = chrome.extension.getURL("blocked.html");
  chrome.storage.local.get("blockedSites", (response) => {
    console.log(response);
    response.blockedSites.forEach((e) => {
      if (e) {
        console.log(e);
        let regex = new RegExp(e);
        console.log(regex);
        console.log(request.tabUrl);
        if (regex.test(request.tabUrl)) {
          console.log("not allowed");
          window.location.href = blockedHtmlUrl;
        } else {
          console.log("allowed site");
        }
      }
    });
  });
});
