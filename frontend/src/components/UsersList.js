import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import AddNewUser from './AddNewUser';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';

const UsersList = () => {
	const [usersList, addToUsersList] = useState([]);
	const [currentUser, setCurrentUser] = useState();
	const [messagesList, addToMessageList] = useState([]);
	const socket = socketIOClient('http://localhost:4200');

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
			<AddNewUser
				setCurrentUser={setActiveUser} />
			<h1>Active users</h1>
			{usersList.map(item => (
				<p key={item}>{item}</p>
			))}
			<MessageBox messageObject={messagesList} />
			<MessageInput
				currentUser={currentUser} />
		</div>
	);
};

export default UsersList;