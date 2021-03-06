const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getRoomUsernames
} = require('./utils/users');



const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


const bot = {
  username: 'Rext Bot',
  colour: '#000000',
  id: undefined
}

// Run when client connects
io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {

    if (getRoomUsernames(room).includes(username)) {
      socket.emit('duplicateName');
      return
    };
    const user = userJoin(socket.id, username, room)
    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(bot, `Welcome to Rext!`));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(bot, `<span style=color:${user.colour}>${user.username}</span> has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);
    if (!user) { socket.emit('message', formatMessage(bot, 'There was an error sending the message, please try again or reload')) }
    io.to(user.room).emit('message', formatMessage(user, msg));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(bot, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
