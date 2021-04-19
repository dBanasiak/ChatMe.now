import React from 'react';
import PropTypes from 'prop-types';
import {
	UsersListContainer, UsersListItem, UsersListTitle, UsersListRoom
} from '../style/components/activeUsersList';

const ActiveUsersList = ({
	usersList,
	currentUser,
	currentRoom
}) => (
	<UsersListContainer>
		<UsersListRoom>{currentRoom}</UsersListRoom>
		<UsersListTitle>Active users</UsersListTitle>
		{usersList.map(item => (
			<UsersListItem
				isCurrentUser={item === currentUser}
				key={item}>
				{item}
			</UsersListItem>
		))}
	</UsersListContainer>
);

ActiveUsersList.propTypes = {
	usersList: PropTypes.array,
	currentUser: PropTypes.string,
	currentRoom: PropTypes.string
};

export default ActiveUsersList;