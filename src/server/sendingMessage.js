const {
	emittedEvents,
	serverLabels
} = require("../constants");

module.exports = (socket, io) => {
    socket.on(emittedEvents.sendingMessage, (data) => {
		console.log(data.nick, serverLabels.sentMessage, `'${data.message}'`);
		io.emit(emittedEvents.sendingMessage, data);
	});
};
