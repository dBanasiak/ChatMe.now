const { emittedEvents } = require("../constants");

module.exports = (socket) => {
    socket.on(emittedEvents.userIsTyping, (data) => {
		socket.broadcast.emit(emittedEvents.userIsTyping, data);
	});
};
