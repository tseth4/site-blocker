chrome.runtime.onMessage.addListener((request) => {
  let blockedHtmlUrl = chrome.runtime.getURL("blocked.html");
  chrome.storage.local.get("blockedSites", (response) => {
    response.blockedSites.forEach((e) => {
      if (e) {
        let regex = new RegExp(e);
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
