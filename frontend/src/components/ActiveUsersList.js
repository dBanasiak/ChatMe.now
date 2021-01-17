import React from 'react';
import PropTypes from 'prop-types';
import {
	UsersListContainer, UsersListItem, UsersListTitle
} from '../style/components/activeUsersList';

const ActiveUsersList = ({
	usersList,
	currentUser
}) => (
	<UsersListContainer>
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
	currentUser: PropTypes.string
};

export default ActiveUsersList;