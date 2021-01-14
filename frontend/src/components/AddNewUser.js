import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';

const AddNewUser = ({
	setCurrentUser
}) => {
	const [user, setUser] = useState('');
	const [isVisible, setIsVisible] = useState(true);

	const addNewUser = () => {
		const socket = socketIOClient('http://localhost:4200');
		socket.emit('add_new_user', user);
		setIsVisible(!isVisible);
		setCurrentUser(user);
	};

	const handleKeyDown = ({ key }) => {
		if (key === 'Enter') {
			addNewUser();
		}
	};
	
	return (
		(isVisible && 
			<div>
				<input
					placeholder="Enter your nickname"
					value={user}
					onChange={e => setUser(e.target.value)}
					onKeyDown={handleKeyDown} />
				<button onClick={addNewUser}>Join</button   >
			</div>)
	);
};

AddNewUser.propTypes = {
	setCurrentUser: PropTypes.func
};

export default AddNewUser;