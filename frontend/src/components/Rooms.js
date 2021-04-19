import React from 'react';
import { useHistory } from 'react-router-dom';

const Rooms = () => {
	const fakeRooms = [
		{
			id: 'amVkZW4=',
			name: 'Room Super Funky'
		},
		{
			id: 'ZHdh',
			name: 'Cool cars'
		},
		{
			id: 'dHJ6eQ==',
			name: 'Top secret'
		}
	];
	const history = useHistory();

	const setRoom = (room) => {

		history.push({
			pathname: '/users',
			search: `room=${room}`
		});
	};

	return (
		fakeRooms.map((room) => {
			const { id, name } = room;

			return (
				<div key={id}>
					<button onClick={() => setRoom(name)}>{name}</button>
				</div>
			);
		})
	);
};

export default Rooms;
