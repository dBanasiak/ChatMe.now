import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AddUserButton, AddUserContainer, AddUserInput, AddUserLabel } from '../style/components/addNewUser';
import { socketClient } from '../utils/socketClient';

const AddNewUser = () => {
	const [user, setUser] = useState('');
	const [isVisible, setIsVisible] = useState(true);
	const inputID = 'add-user-id';
	const isUser = user.length;
	const history = useHistory();

	const setCurrentUser = (user) => {
		const currentParams = `${window.location.search}&user=${user}`;

		history.push({
			pathname: '/chat',
			search: currentParams
		});
	};

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

export default AddNewUser;