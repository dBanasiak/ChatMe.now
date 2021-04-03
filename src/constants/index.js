module.exports = {
	serverConfig: {
		port: 3001,
		hostname: 'http://localhost',
		buildPath: 'frontend/build'
	},
	emittedEvents: {
		userDisconnected: 'user_disconnected',
		disconnect: 'disconnect',
		userIsTyping: 'user_is_typing',
		addNewUser: 'add_new_user',
		sendingMessage: 'sending_a_message',
		connection: 'connection'
	},
	serverLabels: {
		userDisconnected: 'User disconnected',
		newUserAdded: 'New user added',
		sentMessage: 'sent a message'
	},
};
