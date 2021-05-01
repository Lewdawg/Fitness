import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import Testing from './App.testing.jsx';

function App() {

	//Passed into main component
	const [workouts, setWorkouts] = useState([{ "STATE NAME": "WORKOUTS" }]);

	useEffect(() => {

		axios('/api/workouts')
			.then((response) => setWorkouts([...workouts, ...response.data]))
			.catch(console.error);

	}, []);

	//Passed into main component
	const [quickSearchFilter, setQuickSearchFilter] = useState({ "STATE NAME": "QUICK SEARCH FILTER" });

	// ↓ Being passed into the header and main component 
	const [display, setDisplay] = useState({
		"STATE NAME": "DISPLAY",
		selectButtons: true,
		quickSearch: false,
		cardList: false,
	});

	return (

		<div className="App">

			<Header {...{ display, setDisplay }} />
			<Main {...{ workouts, quickSearchFilter, setQuickSearchFilter, display, setDisplay }} />
			<Footer />

			{/* 	<Testing /> */}

		</div>
	);
}

export default App;
