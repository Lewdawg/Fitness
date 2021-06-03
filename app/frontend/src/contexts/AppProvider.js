import AppContext from './AppContext.js';
import { useState } from 'react';

function AppProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState(false);
	return (
		<AppContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				username,
				setUsername
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
