import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import AddNewUser from './AddNewUser';

const UsersList = () => {
	const [usersList, addToUsersList] = useState([]);

	useEffect(() => {
		const socket = socketIOClient('http://localhost:4200');
		socket.on('add_new_user', data => {
			addToUsersList(data);
		});
	});

	return (
		<div>
			<AddNewUser />
			<h1>Active users</h1>
			{usersList.map(item => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
};

export default UsersList;