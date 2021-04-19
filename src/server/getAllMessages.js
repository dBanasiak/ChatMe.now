module.exports = (socket, io) => {
	socket.on('get_all_messages', () => {
		io.emit('get_all_messages', socket.allMessages);
	});
};
