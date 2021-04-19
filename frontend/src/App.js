import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import BaseChat from './components/BaseChat';
import AddNewUser from './components/AddNewUser';
import Rooms from './components/Rooms';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/'>
						<Rooms />
					</Route>
					<Route exact path='/users'>
						<AddNewUser />
					</Route>
					<Route path='/chat'>
						<BaseChat />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
