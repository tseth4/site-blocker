// need disabled button functionality if no input is present or incorrect format
// need to maintain the input inside box.
function saveSites() {
  let sitesInput = document.getElementById("site-input").value;
  let sitesArr = sitesInput.split(",");
  chrome.storage.local.set({
    blockedSites: sitesArr,
  });
}

document.querySelector("#save-sites").addEventListener("click", () => {
  saveSites();
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  console.log(changes);
  let siteList = document.querySelector("#site-list");
  siteList.innerHTML = "";
  changes.blockedSites.newValue.forEach((e) => {
    let newNode = document.createElement("li");
    newNode.innerHTML = e;
    siteList.appendChild(newNode);
  });
});

chrome.storage.local.get("blockedsites", (response) => {
  console.log(response);
  if (!isEmpty(response)) {
    let siteList = document.querySelector("#site-list");
    response.blockedSites.forEach((e) => {
      let newNode = document.createElement("li");
      newNode.innerHTML = e;
      siteList.appendChild(newNode);
    });
  }
});

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}
