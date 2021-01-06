const {
	emittedEvents,
	serverLabels
} = require("../constants");

module.exports = (socket, io, chatUsers) => {
    socket.on(emittedEvents.disconnect, () => {
		chatUsers.delete(socket.userId);
		io.emit(emittedEvents.userDisconnected, socket.userId);
		console.log(serverLabels.userDisconnected, socket.userId);
	});
};