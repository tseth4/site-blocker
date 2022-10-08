let dat = {
  "quotes": [
    "You have power over your mind - not outside events. Realize this, and you will find strength. <span>― Marcus Aurelius, Meditations</span>",
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ... <span> ― Marcus Aurelius, Meditations</span>",
    "If it is not right do not do it; if it is not true do not say it. <span>― Marcus Aurelius, Meditations</span>",
    "“It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult.” <span>- Seneca</span>",
    "“Luck is what happens when preparation meets opportunity.” <span>- Seneca</span>",
    "“Most powerful is he who has himself in his own power.” <span>– Seneca</span>",
    "“He who cannot obey himself will be commanded. That is the nature of living creatures.” <span>– Friedrich Nietzsche</span>",
    "Every action you take is a vote for the person you wish to become. <span>-James Clear</span>",
    "Habits are the compound interest of self-improvement.<span>-James Clear</span>",
    "Your habits shape your identity, and your identity shapes your habits. <span>-James Clear</span>",
    "With the same habits, you’ll end up with the same results. But with better habits, anything is possible. <span>-James Clear</span>"
  ]
}

let messageElement = document.querySelector(".blocked-container__message");
let innerContent = dat.quotes[Math.floor(Math.random() * dat.quotes.length)]
messageElement.innerHTML = innerContent;
