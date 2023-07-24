// -------------------------------set emoji picker-----------------------------------

window.addEventListener("DOMContentLoaded", () => {
    EmojiButton(document.querySelector("#emoji-button"), function (emoji) {
        document.querySelector(".emoji-input").value += emoji;
    });
});

//--------------------------toggle full-width / 2 column-----------------------------

const toggleBtn = document.querySelector(".toggle");
const wrapper = document.querySelector(".wrapper");

toggleBtn.addEventListener("click", () => {
    wrapper.classList.toggle("full-width");
});

// Toggle class based on screen size
function checkScreenSize() {
    var shouldAddClass = window.innerWidth <= 1200;
    wrapper.classList.toggle("full-width", shouldAddClass);
}

// Call function initially and on screen resize
window.addEventListener("resize", checkScreenSize);
checkScreenSize();

//-----------------------Update the progress bar dynamically---------------------------

function updateProgressBar(collectedAmount, totalAmount) {
    const progressPercentage = (collectedAmount / totalAmount) * 100;
    const progressBar = document.getElementById("my-progress-bar");
    progressBar.style.width = progressPercentage + "%";
}

let collectedAmount = 200;
let totalAmount = 2000;

document.querySelector(".goal-reached").textContent = collectedAmount;
document.querySelector(".goal-amount").textContent = totalAmount;
updateProgressBar(collectedAmount, totalAmount);

//-------------------------Initialize single menu dropdown-----------------------------

singleMenu("target_id1", "menu_id1", false);
singleMenu("target_id2", "menu_id2", false);

// ---------------------Scroll to more room section on button click--------------------

const moreRoomContainer = document.querySelector(".more-room");
const moreRoomButtons = document.querySelectorAll(".more-room-btn");
const bioContainer = document.querySelector(".bio-container");

moreRoomButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked");
        moreRoomContainer.style.display = "block";
        bioContainer.style.display = "none";
        moreRoomContainer.scrollIntoView({
            behavior: "smooth",
        });
    });
});

// -------------------handle mobile chatbox form submission----------------------------

const form = document.querySelector(".mobile-chatbox__form");
const chatTabButton = document.querySelector("#chat-button");
const chatTabContainer = document.querySelector("#chat-tab");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    showTab("chat");
    chatTabContainer.scrollIntoView({
        behavior: "smooth",
    });
});

// -----------------------------------tab section--------------------------------------

function hideAllTabs() {
    const tabs = document.querySelectorAll(".tab-menu");
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
}
function showTab(tabId) {
    hideAllTabs();
    const tab = document.getElementById(`${tabId}-tab`);
    tab.classList.add("active");
    setActiveButton(tabId);
}
function setActiveButton(tabId) {
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });
    const button = document.getElementById(`${tabId}-btn`);
    button.classList.add("active");
}

// -------------------------stop refreshing on send message-----------------------------

const sendMessageForm = document.querySelector(".input-container");

sendMessageForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
