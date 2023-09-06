let AllChats = []
let allArchiveChats = []
let selectedId
let selectedChat
let selectedChatId
let ourUser
const discussions = document.getElementById('discussions')
const chats = document.querySelector('.chat')
const backIcon = document.querySelector('.back-icon')
// --------------changes here (RB)--------------
const chatInfoTimer = document.getElementById('chat-info__timer')
const chatInfoTitle = document.getElementById('chat-info__title')
const headerTagsContent = document.getElementById('header__tags')
const InputBox = document.querySelector('.footer-chat')
const messagesContainer = document.getElementById('messages-chat')

InputBox.addEventListener('submit', e => {
  e.preventDefault()
  sendMessage(true)
  messagesContainer.scrollTo({
    top: messagesContainer.scrollHeight,
    behavior: 'smooth'
  })
})

// ---------------------------------------------

function formatTimeDifference (timestamp) {
  const currentTime = new Date()
  const providedTime = new Date(timestamp)

  const timeDifference = Math.abs(currentTime - providedTime)
  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days === 0) {
    if (hours === 0) {
      if (minutes === 0) {
        return `${seconds}s ago`
      } else {
        return `${minutes}m ago`
      }
    } else {
      return `${hours}h ago`
    }
  } else if (
    currentTime.getFullYear() === providedTime.getFullYear() &&
    currentTime.getMonth() === providedTime.getMonth()
  ) {
    const formattedTime = providedTime.toLocaleString('en-US', {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
    return formattedTime
  } else if (currentTime.getFullYear() === providedTime.getFullYear()) {
    const formattedTime = providedTime.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
    return formattedTime
  } else {
    const formattedTime = providedTime.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
    return formattedTime
  }
}

const switchChats = async chatId => {
  document.querySelector('.chat').hidden = false
  if (selectedId) {
    document.getElementById(selectedId).classList.remove('message-active')
  }

  if (screenWidth <= 1080) {
    //changes here (RB)
    discussions.style.display = 'none'
    chats.style.display = 'flex' // changes here (RB)
  } else {
    chats.style.display = 'flex' // changes here (RB)
  }
  selectedId = chatId.id
  document.getElementById(selectedId).classList.add('message-active')
  console.log(chatId.id)
  selectedChatId = chatId.id
  const esistingChat = AllChats.find(chat => chat.id === chatId.id)
  let chat = await Promise.all([
    fetch(
      `https://wbqr3oy7xgmczpsmho2uned3u40efigm.lambda-url.ap-northeast-1.on.aws/messages?uid1=${esistingChat.uid1}&uid2=${esistingChat.uid2}`
    )
  ])
  chat = await Promise.all([chat[0].json()])
  chat = {
    uid1: esistingChat.uid1,
    uid2: esistingChat.uid2,
    messages: chat[0]?.items,
    id: esistingChat.id,
    tags: esistingChat.tags
  }
  selectedChat = chat
  ourUser = chat.uid1 === uuid ? 'uid1' : 'uid2'
  let otherUser = chat.uid1 === uuid ? 'uid2' : 'uid1'
  document.getElementById('chat-user').innerText = chat[otherUser]

  // --------------changes here (RB)--------------
  chatInfoTitle.textContent =
    chat.messages[chat.messages.length - 1]?.chatTitle || 'This is chat title'
  headerTags = ``
  chat?.tags?.forEach(tag => {
    headerTags += `<span>${tag}</span>`
  })
  headerTagsContent.innerHTML = headerTags
  //---------------------------------------------

  messagesContainer.innerHTML = ''

  chat.messages.forEach((message, idx) => {
    let messageBox
    let timeAgo = message.timeStamp
    const timeDifferenceString = formatTimeDifference(timeAgo)
    chatInfoTimer.textContent = formatTimeDifference(timeAgo) // changes here (RB)
    if (message.sender !== ourUser) {
      messageBox = `
        <div class="message">
          <div
            class="photo"
            style="
              background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
            "
          ></div>
          <p class="text">${message.message}</p>
        </div>
        `
      if (
        chat.messages[idx + 1] &&
        chat.messages[idx + 1].sender !== message.sender
      ) {
        messageBox += `
              <p class="time">${timeDifferenceString}</p>
      `
      }
    } else {
      messageBox = `
        <div class="message text-only">
          <div class="response">
            <p class="text">${message.message}</p>
          </div>
        </div>
        `
      if (
        chat.messages[idx + 1] &&
        chat.messages[idx + 1].sender !== message.sender
      ) {
        messageBox += `
              <p class="response-time time">${timeDifferenceString}</p>
      `
      }
    }
    messagesContainer.innerHTML += messageBox
  })
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
}
const getChats = async () => {
  const chats = await fetch(
    `https://wbqr3oy7xgmczpsmho2uned3u40efigm.lambda-url.ap-northeast-1.on.aws/chats?uid=${uuid}`
  )
  const data = await chats.json()
  const responses = await Promise.all(
    data.map(chat =>
      fetch(
        `https://wbqr3oy7xgmczpsmho2uned3u40efigm.lambda-url.ap-northeast-1.on.aws/messages?uid1=${chat.uid1}&uid2=${chat.uid2}`
      )
    )
  )
  const jsons = await Promise.all(responses.map(res => res.json()))
  jsons.forEach((json, i) => {
    AllChats = [
      ...AllChats,
      {
        uid1: data[i].uid1,
        uid2: data[i].uid2,
        tags: data[i].tags,
        messages: json.items,
        id: data[i].id
      }
    ]
  })
  console.log({ AllChats })
  const dicussionsContainer = document.getElementById('discussions')
  const normalChats = dicussionsContainer.querySelector('.normalChats')
  // dicussionsContainer.innerHTML = `
  // <div class="discussion search">
  //   <div class="searchbar">
  //       <i class="fa fa-search" aria-hidden="true"></i>
  //       <input type="text" placeholder="Search..." class="search-input" />
  //   </div>
  // </div>
  // `
  // AllChats.sort((a, b) => {
  //   const aTime =
  //     new Date(a.messages[a.messages.length - 1]?.timeStamp) || Date.now()
  //   const bTime =
  //     new Date(b.messages[b.messages.length - 1]?.timeStamp) || Date.now()
  //   return bTime - aTime
  // })

  AllChats.sort((a, b) => {
    const aLatestMessageTime =
      a.messages.length > 0
        ? new Date(a.messages[a.messages.length - 1].timeStamp)
        : new Date(0)
    const bLatestMessageTime =
      b.messages.length > 0
        ? new Date(b.messages[b.messages.length - 1].timeStamp)
        : new Date(0)

    // Check if either chat has no messages
    if (a.messages.length === 0 && b.messages.length > 0) {
      return 1 // Place chat 'a' at the end
    }
    if (a.messages.length > 0 && b.messages.length === 0) {
      return -1 // Place chat 'b' at the end
    }

    // Sort chats based on the latest message timestamp in descending order
    const chatTimeComparison = bLatestMessageTime - aLatestMessageTime

    // If chat timestamps are the same, you can sort by other criteria (if needed)
    // For example, you can sort alphabetically by chat name:
    // const chatNameComparison = a.chatName.localeCompare(b.chatName);

    return chatTimeComparison
  })
  AllChats.forEach(chat => {
    let user = chat.uid1 == uuid ? chat.uid2 : chat.uid1
    const chatTitle = chat.messages[chat.messages.length - 1]?.chatTitle || 'This is chat title' // changes here (RB)
    const lastMessage =
      chat.messages[chat.messages.length - 1]?.message || 'Start Chatting...'
    let timeAgo =
      chat.messages[chat.messages.length - 1]?.timeStamp || Date.now()
    const timeDifferenceString = formatTimeDifference(timeAgo)
    let tagSpans = ``
    chat?.tags?.forEach(tag => {
      tagSpans += `<span>${tag}</span>`
    })
    if (!chat?.tags?.includes('archive')) {
      const chatContainer = `
    <div class="discussion" data-online="0" data-uid="${user}" id=${chat.id} onclick="(()=>switchChats(${chat.id}))();">
        <div
          class="photo"
          style="
            background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
          
            "
        >
          <div class="status offline"></div>
        </div>
        <div class="desc-contact">
          <p class="name">${user}</p>
          <p class="chat-title">${chatTitle}</p>
          <div class="timer">${timeDifferenceString}</div>
          <p class="message">${lastMessage}</p>
          <p class="tags">${tagSpans}</p>
        </div>
    </div> 
    `
      normalChats.innerHTML += chatContainer
    } else {
      const archivedDicussionsDiv = dicussionsContainer.querySelector(
        '.archiveDiscussions'
      )

      allArchiveChats.push(chat)
      const chatContainer = `
    <div class="discussion" data-online="0" data-uid="${user}" id=${chat.id} onclick="(()=>switchChats(${chat.id}))();">
        <div
          class="photo"
          style="
            background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
          
            "
        >
          <div class="status offline"></div>
        </div>
        <div class="desc-contact">
          <p class="name">${user}</p>
          <p class="chat-title">${chatTitle}</p>
          <div class="timer">${timeDifferenceString}</div>
          <p class="message">${lastMessage}</p>
          <p class="tags">${tagSpans}</p>
        </div>
    </div> 
    `
      archivedDicussionsDiv.innerHTML += chatContainer
    }
  })

  // if()
}

function showHideArchiveChats () {
  const archivedMainDiv = document.querySelector('.archiveChats')
  const archivedDicussionsDiv = document.querySelector('.archiveDiscussions')
  const archiveSpan = document.querySelector('.archiveSpan')
  archiveSpan.parentNode.removeChild(archiveSpan)

  if (archivedDicussionsDiv.style.display == 'none') {
    archivedDicussionsDiv.style.display = 'block'
    archiveSpan.children[0].innerHTML = 'Hide Archive Chats'
    archivedMainDiv.appendChild(archiveSpan)
  } else {
    archivedDicussionsDiv.style.display = 'none'
    chats.style.display = 'none'
    archiveSpan.children[0].innerHTML = 'Show Archive Chats'
    archivedMainDiv.prepend(archiveSpan)
  }
}

const init = async () => {
  await getChats()
  const userOnlineIds = getUserOnlineIds()
  startTimer(userOnlineIds)
  // await startTimerLambda(userOnlineIds)
}
init()

// First function to create an array of user ids that have attribute data-online=""
function getUserOnlineIds () {
  var userOnlineIds = []
  var divs = document.querySelectorAll('div[data-online="0"]')
  divs.forEach(function (div) {
    userOnlineIds.push(div.getAttribute('data-uid'))
  })
  return userOnlineIds
}

var timer
async function startTimerLambda (userOnlineIds) {
  // Clearing previous interval if any
  if (timer) clearInterval(timer)
  const response = await getOnlineUsersId(userOnlineIds)
  updateUserOnlineStatus(response)
  // Starting new interval
  timer = setInterval(async function () {
    const response = await getOnlineUsersId(userOnlineIds)
    updateUserOnlineStatus(response)
  }, 2500)
}

async function getOnlineUsersId (userOnlineIds) {
  let response = await fetch(
    `https://wbqr3oy7xgmczpsmho2uned3u40efigm.lambda-url.ap-northeast-1.on.aws/getOnlineUsers`,
    {
      method: 'POST',
      body: JSON.stringify({
        requestedIds: userOnlineIds,
        sender: uuid,
        userOnlineStatus: true
      })
    }
  )

  response = await Promise.all([response.json()])
  return response[0].data
}

window.onload = () => {
  screenWidth = window.innerWidth
  if (screenWidth <= 1080) {
    //changes here (RB)
    chats.style.display = 'none'
    backIcon.style.display = 'block'
    discussions.style.display = 'block'
  } else {
    // chats.style.display = 'flex';
    discussions.style.display = 'block'
    backIcon.style.display = 'none'
  }
}

let screenWidth = 0
// Listen for changes in viewport width
window.addEventListener('resize', () => {
  screenWidth = window.innerWidth
  if (screenWidth <= 1080) {
    //changes here (RB)
    chats.style.display = 'none'
    backIcon.style.display = 'block'
    discussions.style.display = 'block'
  } else {
    discussions.style.display = 'block'
    backIcon.style.display = 'none'
  }
  // You can now use screenWidth to make decisions in your code
})

function back () {
  chats.style.display = 'none'
  discussions.style.display = 'block'
}

function updateChatOrder (chatId) {
  const isArchiveChat = allArchiveChats.find(chat => {
    if (chat.id == chatId) return chat
  })
  const discussionsContainer = document.querySelector('.discussions')
  const chatDiv = document.getElementById(chatId)

  if (isArchiveChat) {
    const archiveDiscussions = discussionsContainer.querySelector('.archiveDiscussions')
    // const position = archiveChats.children[0].className == 'archiveSpan' ? 1 : 0
    archiveDiscussions.insertBefore(chatDiv, archiveDiscussions.children[0])
  } else {
    const normalChats = discussionsContainer.querySelector('.normalChats')
    normalChats.insertBefore(chatDiv, normalChats.children[0])
  }
}

// initiate emoji picker
const emojiButton = document.getElementById('emoji-button');

window.addEventListener("DOMContentLoaded", () => {
  EmojiButton(emojiButton, function (emoji) {
      document.querySelector(".emoji-input").value += emoji;
  });
});