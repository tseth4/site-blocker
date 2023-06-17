

function saveSite(site) {
  chrome.storage.local.get("blockedSites", (res) => {
    if (res.blockedSites) {
      chrome.storage.local.set({ blockedSites: [...res.blockedSites, site] })
    } else {
      chrome.storage.local.set({ blockedSites: [site] })
    }
  })
}

let saveSiteInput = document.querySelector(".save_site_input");
let siteListElement = document.querySelector("#site-list");
let saveSiteButton = document.querySelector(".save_site_button");

saveSiteButton.addEventListener("click", () => {
  if (saveSiteInput.value) {
    console.log("hasvalue")
    saveSite(saveSiteInput.value);
  } else {
    console.log("novalue");
  }
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
  let siteList = document.querySelector("#site-list");
  siteList.innerHTML = "";
  changes.blockedSites.newValue.forEach((e, i) => {
    let newNode = createBlockedSiteNode(e, i);
    siteList.appendChild(newNode);
  });
  handleRemoveSiteButtons()
});

chrome.storage.local.get("blockedSites", (response) => {
  if (!isEmpty(response)) {
    let siteList = document.querySelector("#site-list");
    response.blockedSites.forEach((e, i) => {
      let newNode = createBlockedSiteNode(e, i);
      siteList.appendChild(newNode);
    });
  }
  handleRemoveSiteButtons()
});

function handleRemoveSiteButtons() {
  let removeSiteButtons = document.querySelectorAll(".site_list__remove_button")
  for (let i = 0; i < removeSiteButtons.length; i++) {
    removeSiteButtons[i].addEventListener("click", (e) => {
      // console.log("e button: ", e);
      // console.log("rsbi: ", removeSiteButtons[i]);
      removeSiteFromLocalStorage(i)

    })
  }
}

function removeSiteFromLocalStorage(index){
  chrome.storage.local.get("blockedSites", (response) => {
    let newBlockedSites = response.blockedSites;
    newBlockedSites.splice(index, 1);
    chrome.storage.local.set({ blockedSites: newBlockedSites});
  })
}

function createBlockedSiteNode(site, index) {
  let newNode = document.createElement("div");
  let newUrl = document.createElement("div");
  let newRemoveButton = document.createElement("button");
  newNode.className = "site_list__site";
  newRemoveButton.innerHTML = "-"
  newRemoveButton.dataset.id = index;
  newRemoveButton.className = "site_list__remove_button";
  newNode.dataset.id = index;
  newUrl.innerHTML = site;
  newNode.appendChild(newUrl);
  newNode.appendChild(newRemoveButton);
  return newNode;
}

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}
