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
    console.log(collectedAmount, totalAmount);
    const progressPercentage = (collectedAmount / totalAmount) * 100;
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((progressBar) => {
        progressBar.style.width = progressPercentage + "%";
    });
}

let collectedAmount = 200;
let totalAmount = 2000;

document.querySelector(".goal-reached").textContent = collectedAmount;
document.querySelector(".goal-amount").textContent = totalAmount;
updateProgressBar(collectedAmount, totalAmount);

//-------------------------Initialize single menu dropdown-----------------------------

singleMenu("target_id1", "menu_id1", false);
singleMenu("target_id2", "menu_id2", false);
singleMenu("target_id3", "menu_id3", false);
singleMenu("target_id4", "menu_id4", false);

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
        showTab("rooms");
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
    addClassToBottomContainer();
}

function setActiveButton(tabId) {
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });
    const button = document.getElementById(`${tabId}-btn`);
    button.classList.add("active");
}

// ----------------------------------mobile chatbox---------------------------------------

const bottomContainer = document.querySelector(".bottom-container");
const mobileChatbox = document.querySelector(".mobile-chatbox");

// scroll to chat tab on mobile chatbox click
const chatTabContainer = document.querySelector("#chat-tab");

mobileChatbox.addEventListener("click", (e) => {
    showTab("chat");
    chatTabContainer.scrollIntoView({
        behavior: "smooth",
    });
});

// Add class to bottomContainer if chat tab is open
const chatTab = document.getElementById("chat-tab");

function addClassToBottomContainer() {
    if (chatTab.classList.contains("active")) {
        bottomContainer.classList.add("chat-active");
    } else {
        bottomContainer.classList.remove("chat-active");
    }
}

addClassToBottomContainer();

// -------------------------add message with input value-----------------------------

const sendMessageForm = document.querySelector(".input-container");
const messageContainer = document.querySelector(".message-container");
const messageInput = document.querySelector(".input-message");

sendMessageForm.addEventListener("submit", (e) => {
    // stop auto refreshing on submit
    e.preventDefault();

    // Create a new div element
    if(messageInput.value != ''){
    const newDiv = document.createElement("div");
    newDiv.classList.add("message", "message-right");
    newDiv.innerHTML = `<div class="img-container">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                            </div>

                            <div class="text-container">
                                <span class="name">You</span>
                                <p class="text">
                                    ${messageInput.value}
                                </p>
                                <span class="time">3:50 PM</span>
                            </div>`;

    // Get the first child element of the container (if any)
    const firstChild = messageContainer.firstChild;

    // Insert the new div before the first child (if any), or at the top
    messageContainer.insertBefore(newDiv, firstChild);

    // Clear input value on submit
    messageInput.value = "";
    }else{
        return;
    }
});

// -----------------------------Close dropdown on icon-close click----------------------------

const closeIcon = document.querySelectorAll(".icon-close");

closeIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        const menuIdContainer = icon.closest(".menu-id");
        const targetIdContainer = icon.closest(".target-id");

        if (menuIdContainer) {
            menuIdContainer.style.display = "none";
            targetIdContainer.classList.remove("active");
        }
    });
});
