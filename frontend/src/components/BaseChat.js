import React, { useEffect, useState } from 'react';
import { BaseChatContainer } from '../style/components/baseChat';
import { socketClient } from '../utils/socket-client';
import ActiveUsersList from './ActiveUsersList';
import AddNewUser from './AddNewUser';
import MessageBox from './MessageBox';

const BaseChat = () => {
	const [usersList, addToUsersList] = useState([]);
	const [currentUser, setCurrentUser] = useState();
	const [messagesList, addToMessageList] = useState([]);
	const socket = socketClient();

	const setActiveUser = (userName) => setCurrentUser(userName);

	useEffect(() => {
		socket.on('add_new_user', data => {
			addToUsersList(data);
		});

		socket.on('sending_a_message', data => {
			addToMessageList(messagesList => [...messagesList, data]);
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
			<AddNewUser setCurrentUser={setActiveUser} />
			{currentUser &&
				<BaseChatContainer>
					<ActiveUsersList
						currentUser={currentUser}
						usersList={usersList} />
					<MessageBox
						currentUser={currentUser}
						messageObject={messagesList} />
				</BaseChatContainer>
			}
		</div>
	);
};

export default BaseChat;