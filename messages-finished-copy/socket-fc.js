// Declare 'socket' and 'interval' variables
var socket
var connected = false
let interval
const chatContainerDiv = document.querySelector('.chatContainer')
const uuid = chatContainerDiv.getAttribute('data-uid')

// Create a new WebSocket connection to the specified URL
socket = new WebSocket(
  'wss://qy3dr8zkzj.execute-api.ap-northeast-1.amazonaws.com/dev'
)

// Event handler for successful connections
socket.onopen = function (data) {
  console.log('Connected to AWS WebSocket', data)
  connected = true
  // Start a periodic interval to send messages every 2 seconds
  // interval = setInterval(() => {
  //   sendMessage(false, 'test')
  // }, 2000)

  // Send an initial message when the WebSocket connection is open
  sendMessage()
}

// Event handler for receiving messages
socket.onmessage = function (event) {
  const parseData = JSON.parse(event.data)
  const currentDate = new Date().toLocaleString()

  if (parseData.hasOwnProperty('isTypingStatus')) {
    if (parseData.isTypingStatus) showTypingStatus()
    else clearTypingStatus()
  } else if (parseData.hasOwnProperty('userOnlineStatus')) {
    updateUserOnlineStatus(parseData)
  } else if (selectedChat) {
    messageBox = `
          <div class="message">
            <div
              class="photo"
              style="
                background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
              "
            ></div>
            <p class="text">${parseData.message}</p>
          </div>
          `
    const messagesContainer = document.getElementById('messages-chat')
    messagesContainer.innerHTML += messageBox
    console.log('Received message from websocket: ' + currentDate)
    console.log('Received message:', parseData)
  }

  const chat = document.getElementById(parseData.selectedChatId)
  if (chat) {
    updateChatOrder(parseData.selectedChatId)
    chat.querySelector('.message').innerHTML = parseData.message
    document.querySelector('.timer').innerHTML = 'Just now'
  }
}

// Function to send messages to the WebSocket server
async function sendMessage (
  isChat = false,
  msg = null,
  isTypingStatus = null,
  userOnlineStatus = null
) {
  let payload = {
    action: 'sendMessage',
    data: { user_id: uuid, update_user_id: true }
  }

  // If 'msg' is provided, use it as the payload data
  if (isChat) {
    if (isTypingStatus != null) {
      const msg = {
        isTypingStatus
      }
      payload = {
        action: 'sendMessage',
        data: {
          uid1: selectedChat.uid1,
          uid2: selectedChat.uid2,
          message: msg,
          sender: selectedChat[ourUser],
          type: 'chat'
        }
      }
    } else if (userOnlineStatus != null) {
      payload = {
        action: 'sendMessage',
        data: {
          message: msg,
          sender: uuid,
          userOnlineStatus
        }
      }
    } else {
      const message = document.getElementById('message-text').value
      document.getElementById('message-text').value = ''
      if (!selectedChat) return alert('Please select a chat')
      payload = {
        action: 'sendMessage',
        data: {
          uid1: selectedChat.uid1,
          uid2: selectedChat.uid2,
          message: {
            message,
            selectedChatId
          },
          sender: selectedChat[ourUser],
          type: 'chat'
        }
      }
      const messagesContainer = document.getElementById('messages-chat')
      messageBox = `
          <div class="message text-only">
            <div class="response">
              <p class="text">${message}</p>
            </div>
          </div>
          `
      messagesContainer.innerHTML += messageBox
      const response = await fetch(
        `https://wbqr3oy7xgmczpsmho2uned3u40efigm.lambda-url.ap-northeast-1.on.aws/messages`,
        {
          method: 'POST',
          body: JSON.stringify({
            uid1: selectedChat.uid1.toString(),
            uid2: selectedChat.uid2.toString(),
            message,
            sender: ourUser
          })
        }
      )
      await response.json()
    }
  } else if (msg) payload.data = msg

  if (connected)
    // Convert the payload to a JSON string and send it through the WebSocket
    socket.send(JSON.stringify(payload))

    document.getElementById('messages-chat').scrollTo({
      top: document.getElementById('messages-chat').scrollHeight,
      behavior: "smooth",
    });
}

// Event handler for WebSocket errors
socket.onerror = function (error) {
  console.error('WebSocket error:', error)
}

// Event handler for WebSocket connection close
socket.onclose = function () {
  // Stop the periodic interval when the connection is closed
  clearInterval(interval)
  connected = false
  console.log('Connection closed')
}

const inputBox = document.getElementById('message-text')
const typingStatus = document.querySelector('.tpying-staus')

// Function to show typing status
function showTypingStatus () {
  console.info('ddddd')
  if (selectedChat) {
    typingStatus.textContent = 'typing...'
    typingStatus.hidden = false
  }
}

// Function to clear typing status
function clearTypingStatus () {
  console.info('ssssssss')
  typingStatus.textContent = ''
  typingStatus.hidden = true
}

let focusStatus = 0
// Event listeners for input box
inputBox.addEventListener('focus', () => {
  sendMessage(true, '', true)
})

// Event listeners for input box
// inputBox.addEventListener('change', e => {
//   if (focusStatus === 0 && e.target.value.length > 0) {
//     sendMessage(true, '', true);
//     focusStatus = 1;
//   } else if (e.target.value.length > 0) {
//     focusStatus = 0;
//     sendMessage(true, '', false);
//   }
// });

inputBox.addEventListener('blur', () => {
  sendMessage(true, '', false)
})

function updateUserOnlineStatus (data) {
  const requestedIds = data.requestedIds
  const userOnlineIds = data.userOnlineIds
  requestedIds.forEach(id => {
    const dataDiv = document.querySelector(`[data-uid="${id}"]`)
    const onlineStatus = dataDiv.querySelector('.status')
    if (userOnlineIds.includes(id)) {
      dataDiv.setAttribute('data-online', '1')
      onlineStatus.classList.remove('offline')
      onlineStatus.classList.add('online')
    } else {
      dataDiv.setAttribute('data-online', '0')
      onlineStatus.classList.remove('oline')
      onlineStatus.classList.add('offline')
    }
  })
}

var timer
function startTimer (userOnlineIds) {
  // Clearing previous interval if any
  if (timer) clearInterval(timer)
  sendMessage(true, { userOnlineIds }, null, true)
  // Starting new interval
  timer = setInterval(function () {
    sendMessage(true, { userOnlineIds }, null, true)
  }, 2500)
}

// Initialize typing status
clearTypingStatus()
