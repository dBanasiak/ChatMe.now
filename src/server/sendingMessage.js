const {
	emittedEvents,
	serverLabels
} = require('../constants');

module.exports = (socket, io) => {
	socket.on(emittedEvents.sendingMessage, (data) => {
		const { message, user } = data;
		console.log(`User: '${user}`, serverLabels.sentMessage, `'${message}'`);
		socket.allMessages = [...socket.allMessages, data];
		io.emit(emittedEvents.sendingMessage, data);
	});
};
