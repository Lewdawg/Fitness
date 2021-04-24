import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Navbar from './components/navbar/navbar.component.jsx';
import Homepage from './components/homepage/homepage.component.jsx';
import Footer from './components/footer/footer.component.jsx';

function App() {
	/* let workouts = {};
	useEffect(() => {
		const test = async() => {
			workouts = await axios.get('localhost:3777/api/workouts');
			console.log('hello');
	}
	test();
}, []); */

	/* 	const [globalState, setGlobalState] = useState({
		workouts
	}); */

	/* 	async function getWorkouts() {

	} */
	return (
		<div className="App">
			<Navbar />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
