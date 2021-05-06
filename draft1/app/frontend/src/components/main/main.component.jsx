import './main.styles.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HighlightsBar from './highlights-bar/highlights-bar.component.jsx';
import SelectButtons from './select-buttons/select-buttons.component.jsx';
import QuickSearch from './quick-search/quick-search.component.jsx';
import Workouts from './workouts/workouts.component.jsx';
import Login from './login/login.component.jsx';
import Register from './register/register.component.jsx';
import Exercises from './exercises/exercises.component.jsx';
import Profile from './profile/profile.component.jsx';
import Details from './details/details.component.jsx';
import Contact from './contact/contact.component.jsx';

function Main({
	placeholder,
	setPlaceholder,
	workouts,
	setWorkouts,
	display,
	setDisplay,
	quickSearchFilter,
	setQuickSearchFilter,
}) {
	return (
		<main id="main" className="position-relative">
			<HighlightsBar />
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
				{/* {display.cardList && (
							<CardList
								{...{
									workouts,
									setWorkouts,
									display,
									setDisplay,
									quickSearchFilter,
								}}
							/>
						)} */}
				<Route path="/exercises">
					<Exercises />
				</Route>

				<Route path="/login">
					<Login {...{placeholder, setPlaceholder}}/>
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				{/* {placeholder.loggedIn && <Redirect to='/' />} */}
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/workouts/details">
					<Details />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</main>
	);
}

export default Main;
