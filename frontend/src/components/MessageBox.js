import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({
	messageObject
}) => (
	messageObject.map((messageItem, index) => {
		const { message, user, time } = messageItem;
		const isCurrentUser = () => (
			user === messageObject?.[index - 1]?.user
		);

		return (
			<div key={index}>
				{!isCurrentUser() &&
					<div><b>{user}</b> <i>{time}</i></div>
				}
				<p>{message}</p>
			</div>
		);
	})
);

MessageBox.propTypes = {
	messageObject: PropTypes.array
};

export default MessageBox;