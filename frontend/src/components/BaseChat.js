import React, { useEffect, useState } from 'react';
import { BaseChatContainer } from '../style/components/baseChat';
import { getQueryParams } from '../utils/getQueryParam';
import { socketClient } from '../utils/socketClient';
import ActiveUsersList from './ActiveUsersList';
import MessageBox from './MessageBox';

const BaseChat = () => {
	const [usersList, addToUsersList] = useState([]);
	const currentUser = getQueryParams('user');
	const currentRoom = getQueryParams('room');
	const [messagesList, addToMessageList] = useState([]);
	const socket = socketClient();

	useEffect(() => {
		if (currentUser) {
			socket.emit('add_new_user', currentUser);
		}
	}, []);

	useEffect(() => {
		socket.on('add_new_user', data => {
			addToUsersList(data);
		});

		socket.on('sending_a_message', data => {
			addToMessageList(messagesList => [...messagesList, data]);
		});

		socket.on('get_all_messages', data => {
			addToMessageList(data);
		});

		socket.on('user_disconnected', (userName) => {
			if (userName) {
				addToUsersList(usersList => {
					const index = usersList.indexOf(userName);
					if (index > -1) {
						usersList.splice(index, 1);
					}

					return usersList;
				});
			}
		});
	}, []);

	return (
		<div>
			{currentUser &&
				<BaseChatContainer>
					<ActiveUsersList
						currentUser={currentUser}
						usersList={usersList}
						currentRoom={currentRoom} />
					<MessageBox
						currentUser={currentUser}
						messageObject={messagesList} />
				</BaseChatContainer>
			}
		</div>
	);
};

export default BaseChat;