import './main.styles.css';
import { Switch, Route, Redirect } from 'react-router-dom';

/* import HighlightsBar from './highlights-bar/highlights-bar.component.jsx';
import HighlightsTicker from './highlights-ticker/highlights-ticker.component.jsx'; */
import SelectButtons from './select-buttons/select-buttons.component.jsx';
import QuickSearch from './quick-search/quick-search.component.jsx';
import QuickSearchOld from './quick-search-old/quick-search-old.component.jsx';
import Workouts from './workouts/workouts.component.jsx';
import Login from './login/login.component.jsx';
import LoginSuccess from './login/login-success/login-success.component.jsx';
import Register from './register/register.component.jsx';
import RegisterSuccess from './register/register-success/register-success.component.jsx';
import Exercises from './exercises/exercises.component.jsx';
import Profile from './profile/profile.component.jsx';
import ProfileSuccess from './profile/profile-success/profile-success.component.jsx';
import Details from './workouts/workout/details/details.component.jsx';
import Contact from './contact/contact.component.jsx';
import Error from './error/error.component.jsx';

import { useContext } from 'react';
import AppContext from '../../contexts/AppContext.js';
import Unauthorized from './unauthorized/unauthorized.component.jsx';

function Main({
	workouts,
	setWorkouts,
	display,
	setDisplay,
	quickSearchFilter,
	setQuickSearchFilter,
}) {
	const { loggedIn } = useContext(AppContext);

	const ProtectedRoute = (props) => {
		if (!loggedIn) return <Redirect to='/unauthorized' />
		return <Route {...props} />
	  }

	return (

		<main id="main">

			<Switch>
				<Route exact path="/">
					<SelectButtons
						{...{
							workouts,
							setWorkouts,
							display,
							setDisplay,
							quickSearchFilter,
							setQuickSearchFilter,
						}}
					/>
				</Route>

				<Route path="/quicksearch">
					<QuickSearch
						{...{
							workouts,
							setWorkouts,
							display,
							setDisplay,
							quickSearchFilter,
							setQuickSearchFilter,
						}}
					/>
				</Route>

				<Route exact path="/workouts">
					<Workouts
						{...{
							workouts,
							setWorkouts,
							display,
							setDisplay,
							quickSearchFilter,
						}}
					/>
				</Route>

				<Route path="/exercises">
					<Exercises />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>
				<Route path="/login/success">
					<LoginSuccess />
				</Route>

				<Route exact path="/register">
					<Register />
				</Route>
				<Route path="/register/success">
					<RegisterSuccess />
				</Route>

				<ProtectedRoute path="/profile">
					<Profile />
				</ProtectedRoute>

				<ProtectedRoute path="/profileSuccess">
					<ProfileSuccess />
				</ProtectedRoute>


				<Route path="/unauthorized">
					<Unauthorized />
				</Route>

				<Route path="/workouts/details" component={Details} />

				<Route path="/contact">
					<Contact />
				</Route>

				<Route path="/error">
					<Error />
				</Route>

				<Route path="/QuickSearchOld">
					<QuickSearchOld />
				</Route>

			</Switch>
		</main>
	);
}

export default Main;
