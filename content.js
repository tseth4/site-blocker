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
      // if the current tab url matches with blocked url
    });
    // if (
    //   // request.tabUrl !== response.focusUrl &&
    //   // response.focusUrl !== undefined
    // ) {
    //   let blockedHtmlUrl = chrome.extension.getURL("blocked.html");
    //   window.location.href = blockedHtmlUrl
    // } else {
    //   console.log("were focusing");
    // }
  });
});

// chrome.storage.local.get("focusUrl", (response) => {
//   if (response.focusUrl) {
//     document.querySelector("#secondary-inner").classList.add("hide");
//     document
//       .querySelector(".style-scope ytd-watch-next-secondary-results-renderer")
//       .classList.add("hide");
//   }
// });
