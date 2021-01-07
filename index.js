const express = require('express');
const socket = require('socket.io');
const { serverConfig, emittedEvents } = require('./src/constants');
const addNewUser = require('./src/server/addNewUser');
const sendingMessage = require('./src/server/sendingMessage');
const userDisconnected = require('./src/server/userDisconnected');
const userIsTyping = require('./src/server/userIsTyping');

const PORT = process.env.PORT || serverConfig.port;
const HOSTNAME = serverConfig.hostname;
const chatUsers = new Set();
const app = express();

const server = app.listen(PORT, () => {
	console.log(`Visit ${HOSTNAME}:${PORT}`);
});
const io = socket(server);

// TODO - add frontend part
app.use(express.static(serverConfig.buildPath));

io.on(emittedEvents.connection, (socket) => {
	addNewUser(socket, io, chatUsers);
	sendingMessage(socket, io);
	userIsTyping(socket);
	userDisconnected(socket, io, chatUsers);
});
