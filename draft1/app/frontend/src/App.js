import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import Testing from './App.testing.jsx';

function App() {
	const [workouts, setWorkouts] = useState([{ 'STATE NAME': 'WORKOUTS' }]);

	const [placeholder, setPlaceholder] = useState([{ 'STATE NAME': 'PLACEHOLDER', loggedIn: false }]);


	const [quickSearchFilter, setQuickSearchFilter] = useState({
		'STATE NAME': 'QUICK SEARCH FILTER',
	});

	const [display, setDisplay] = useState({
		'STATE NAME': 'DISPLAY',
		selectButtons: true,
		quickSearch: false,
		cardList: false,
	});

	return (

			<Router>
				<div className="App">
					<Header {...{ placeholder, setPlaceholder, display, setDisplay }} />
					<Main
						{...{
							placeholder,
							setPlaceholder,
							workouts,
							setWorkouts,
							quickSearchFilter,
							setQuickSearchFilter,
							display,
							setDisplay,
						}}
					/>
					<Footer />
					{/* 	<Testing /> */}
				</div>
			</Router>


	);
}

export default App;
