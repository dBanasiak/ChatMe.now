import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';

const MessageInput = ({
	currentUser
}) => {
	const [message, addMessage] = useState('');
	const socket = socketIOClient('http://localhost:4200');

	const sendMessage = () => {
		const time = new Date();
		socket.emit('sending_a_message', {
			message,
			user: currentUser,
			time: time.toLocaleString('en-US', {
				hour: 'numeric',
				minute: 'numeric'
			})
		});
		addMessage('');
	};

	const handleKeyDown = ({ key, target }) => {
		if (key === 'Enter') {
			sendMessage();
			addMessage('');
		} else {
			socket.emit('user_is_typing', {
				isTyping: target.value.length,
				user: currentUser
			});
		}
	};

	return (
		<div>
			<input
				placeholder="Enter message"
				value={message}
				onChange={e => addMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				disabled={!currentUser} />
		</div>
	);
};

MessageInput.propTypes = {
	currentUser: PropTypes.string
};

export default MessageInput;
