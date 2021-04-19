import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MessageInput from './MessageInput';
import {
	MessageBoxContainer,
	MessageBoxWrapper,
	MessageBoxForm,
	MessageBoxHeader,
	MessageBoxText,
	MessageBoxContent
} from '../style/components/messageBox';

const MessageBox = ({
	messageObject,
	currentUser
}) => {
	const [messages, setMessages] = useState(messageObject);

	useEffect(() => {
		
	}, []);

	return (
		<MessageBoxContainer>
			<MessageBoxWrapper>
				<MessageBoxForm>
					{messages.map((messageItem, index) => {
						const { message, user, time } = messageItem;
						const isCurrentUser = () => (
							user === messageObject?.[index - 1]?.user
						);
						return (
							<MessageBoxContent
								key={index}
								isCurrentUser={user === currentUser} >
								{(!isCurrentUser()) &&
									<MessageBoxHeader>
										{user}
										<span>{time}</span>
									</MessageBoxHeader>
								}
								<MessageBoxText>
									{message}
								</MessageBoxText>
							</MessageBoxContent>
						);
					})}
				</MessageBoxForm>
				<MessageInput currentUser={currentUser} />
			</MessageBoxWrapper>
		</MessageBoxContainer>
	);
};

MessageBox.propTypes = {
	messageObject: PropTypes.array,
	currentUser: PropTypes.string
};

export default MessageBox;