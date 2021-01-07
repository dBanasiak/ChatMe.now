module.exports = {
	serverConfig: {
		port: 4200,
		hostname: 'http://localhost'
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
