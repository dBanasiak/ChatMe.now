import socketIOClient from 'socket.io-client';

export const socketClient = () => socketIOClient('ws://localhost:3001', {
	transports: ['websocket']});
