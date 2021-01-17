import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import BaseChat from './components/BaseChat';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/'>
						<BaseChat />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
