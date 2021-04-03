const {
	emittedEvents,
	serverLabels
} = require('../constants');

module.exports = (socket, io, chatUsers) => {
	socket.on(emittedEvents.addNewUser, (data) => {
		console.log(serverLabels.newUserAdded, `'${data}'`);
		socket.userId = data;
		chatUsers.add(data);
		io.emit(emittedEvents.addNewUser, [...chatUsers]);
	});
};
