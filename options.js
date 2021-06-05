
// need disabled button functionality if no input is present or incorrect format
// need to maintain the input inside box.
function saveSites() {
  console.log("saveSites()");
  let sitesInput = document.getElementById("site-input").value;
  let sitesArr = sitesInput.split(",");
  chrome.storage.local.set({
    blockedSites: sitesArr,
  });
}

document.querySelector("#save-sites").addEventListener("click", () => {
  console.log("saving sites");
  saveSites();
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  console.log(changes);
  let siteList = document.querySelector("#site-list");
  siteList.innerHTML = "";
  // while there is a firstchild node

  changes.blockedSites.newValue.forEach((e) => {
    let newNode = document.createElement("li");
    newNode.innerHTML = e;
    siteList.appendChild(newNode);
  });

  // for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
  //   console.log(
  //     `Storage key "${key}" in namespace "${namespace}" changed.`,
  //     `Old value was "${oldValue}", new value is "${newValue}".`
  //   );
  // }
});
