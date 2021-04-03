import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddUserButton, AddUserContainer, AddUserInput, AddUserLabel } from '../style/components/addNewUser';
import { socketClient } from '../utils/socket-client';

const AddNewUser = ({
	setCurrentUser
}) => {
	const [user, setUser] = useState('');
	const [isVisible, setIsVisible] = useState(true);
	const inputID = 'add-user-id';
	const isUser = user.length;

	const addNewUser = () => {
		const socket = socketClient();
		socket.emit('add_new_user', user);
		setIsVisible(!isVisible);
		setCurrentUser(user);
	};

	const handleKeyDown = ({ key }) => {
		if (key === 'Enter' && isUser) {
			addNewUser();
		}
	};
	
	return (
		(isVisible && 
			<AddUserContainer>
				<AddUserLabel htmlFor={inputID}>
					Enter your nickname
				</AddUserLabel>
				<AddUserInput
					placeholder='Nickname...'
					value={user}
					onChange={e => setUser(e.target.value)}
					onKeyDown={handleKeyDown} />
				<AddUserButton
					onClick={addNewUser}
					disabled={!isUser} >
					join
				</AddUserButton>
			</AddUserContainer>)
	);
};

AddNewUser.propTypes = {
	setCurrentUser: PropTypes.func
};

export default AddNewUser;