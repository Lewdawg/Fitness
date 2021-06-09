import AppContext from './AppContext.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AppProvider({ children }) {
	useEffect(
		() =>
			axios('/api/checkLoggedIn')
				.then(({data: {username}}) => {
					setLoggedIn(true);
					setUsername(username);
				})
				.catch((e) => setLoggedIn(false)),
		[]
	);
	const [workouts, setWorkouts] = useState([{ 'STATE NAME': 'WORKOUTS' }]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [quickSearchFilter, setQuickSearchFilter] = useState({
		'STATE NAME': 'QUICK SEARCH FILTER',
	});
	return (
		<AppContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				username,
				setUsername,
				quickSearchFilter,
				setQuickSearchFilter,
				workouts,
				setWorkouts,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
