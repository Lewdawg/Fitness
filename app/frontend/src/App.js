import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component.jsx';
import Footer from './components/footer/footer.component.jsx';

function App() {
	const [workouts, setWorkouts] = useState([{ 'STATE NAME': 'WORKOUTS' }]);

	const [placeholder, setPlaceholder] = useState([
		{ 'STATE NAME': 'PLACEHOLDER', loggedIn: false },
	]);

	const [quickSearchFilter, setQuickSearchFilter] = useState({
		'STATE NAME': 'QUICK SEARCH FILTER',
	});

	return (
		<Router>
			<div id="App">
				<Header {...{ placeholder, setPlaceholder }} />
				<Main
					{...{
						placeholder,
						setPlaceholder,
						workouts,
						setWorkouts,
						quickSearchFilter,
						setQuickSearchFilter,
					}}
				/>
				<Footer />
				{/* 	<Testing /> */}
			</div>
		</Router>
	);
}

export default App;
