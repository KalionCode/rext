
window.lastMessage = {user:{username:null}};

//quilljs setup
function enterHandler() {
  // Get message text
  let msg = chatbox.root.innerHTML;

  msg = msg.trim();

  if (msg == "<p><br></p>") {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);
  // Clear input
  chatbox.root.innerHTML = '';
  chatbox.root.focus();
}

window.chatbox = new Quill('#chatbox', {
  theme: "bubble",
  bounds: document.querySelector("#chatbox"),
  placeholder: "Enter your message here",
});

window.currentSelection = null;

chatbox.keyboard.addBinding(
  { key: 13, shiftKey: null },
  enterHandler
)

//emoji picker
import { EmojiButton } from '../vendor/emojibutton.js';

const button = document.querySelector('#emoji-trigger');
const picker = new EmojiButton({
  position: {
    right: 0,
    bottom: '3rem'
  }
});

button.addEventListener('click', () => {
  chatbox.focus()
  currentSelection = chatbox.getSelection()
})

picker.on('emoji', selection => {

  chatbox.insertText(currentSelection.index, selection.emoji, 'api');
  chatbox.setSelection('a0', currentSelection.length)
  // chatbox.focus()
});

button.addEventListener('click', () => { picker.togglePicker(); });


// socket io
const summitBtn = document.getElementById('summit-btn');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

socket.on('duplicateName', () => {
  alert("Another user with the same name already joined, please choose another name")
  window.location = '/'
});

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', (message) => {
  console.log(message,lastMessage);
  outputMessage(message);
  lastMessage = message;
  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
summitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  enterHandler()
});

// Output message to DOM
function outputMessage(message) {
  console.log(lastMessage.user.username, message.user.username)
  if (lastMessage.user.username === message.user.username) {
    let existingMessages = document.querySelector('.chat-messages').children;
    let lastDOMMessage = existingMessages[existingMessages.length-1];
    
    lastDOMMessage.innerHTML += `\n${message.text}`
  }
  else {
    const div = document.createElement('div');
    div.classList.add('message');
    div.style.border = `3px solid ${message.user.colour}`
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.user.username;
    p.innerHTML += `<span> ${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerHTML = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
  }
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.style.backgroundColor = user.colour;
    li.innerText = user.username;
    userList.appendChild(li);
  });
}

//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});

