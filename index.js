const express = require('express')();
const { serverConfig, emittedEvents } = require('./src/constants');
const addNewUser = require('./src/server/addNewUser');
const getAllMessages = require('./src/server/getAllMessages');
const sendingMessage = require('./src/server/sendingMessage');
const userDisconnected = require('./src/server/userDisconnected');
const userIsTyping = require('./src/server/userIsTyping');

const PORT = process.env.PORT || serverConfig.port;
const chatUsers = new Set();
const server = require('http').createServer(express).listen(PORT);

const io = require('socket.io')(server, {
	cors: {
		origin: 'ws://localhost:3000/',
		methods: ['GET', 'POST'],
		credentials: true
	}
});

io.on(emittedEvents.connection, (socket) => {
	socket.allMessages = [];
	addNewUser(socket, io, chatUsers);
	sendingMessage(socket, io);
	userIsTyping(socket);
	getAllMessages(socket, io);
	userDisconnected(socket, io, chatUsers);
});
