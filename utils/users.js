const users = [];
usedColoursIndex = 0;
const COLOURS = [
  '#e6194b',
  '#3cb44b',
  '#ffe119',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#46f0f0',
  '#f032e6',
  '#bcf60c', 
  '#fabebe', 
  '#008080', 
  '#e6beff', 
  '#9a6324', 
  '#fffac8', 
  '#800000', 
  '#aaffc3', 
  '#808000', 
  '#ffd8b1', 
  '#000075', 
  '#808080', 
  '#000000'
];

// Join user to chat
function userJoin(id, username, room) {
  if (usedColoursIndex==COLOURS.length){
    usedColoursIndex -= COLOURS.length;
  }
  let userColour = COLOURS[usedColoursIndex]
  usedColoursIndex += 1;
  const user = { id, username, room, colour:userColour };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}
function getRoomUsernames(room) {
  let allUsers = users.filter(user => user.room === room);
  let allUsernames = [];
  for (user of allUsers){
    allUsernames.push(user.username)
  }
  return allUsernames;
}

module.exports = {
  users,
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getRoomUsernames,
};
