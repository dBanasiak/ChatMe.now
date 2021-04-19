import socketIOClient from 'socket.io-client';

const client = socketIOClient('ws://localhost:3001', {
	transports: ['websocket']});

export const socketClient = () => {
	return client;
};
