import Button from 'react-bootstrap/Button';

import './details.styles.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../../../contexts/AppContext.js';
import axios from 'axios';

import Counter from './roundCounter/roundcounter.jsx';
import StopWatch from './stopwatch/stopwatch.jsx';
import Tracker from './tracker/tracker.component.jsx';
import TrackerSmall from './tracker-small/tracker-small.component.jsx';

function Details({ location }) {
	const { username: email, loggedIn } = useContext(AppContext);
	const { workout } = (location && location.state) || {
		title: 'problems with location or location.state',
	};
	const history = useHistory();

	const handleFinishWorkout = async () => {
		try {
			loggedIn &&
				(await axios.post('/api/updateWorkouts', {
					email,
					finishedWorkout: workout,
				}));
			history.push('/workoutSaved');
		} catch (e) {
			history.push('/error');
		}
	};
	return (
		<div id="details" className="fadeInDown">
			<h1>{workout.title}</h1>

			<section className="cardLayout">
				<StopWatch />

				<table className="tracking">
					<tr>
						<th>Exercise</th>
						<th>Amount</th>
						<th>Total</th>
						<th></th>
						<th></th>
					</tr>
					{workout.exercises.map(({ name, reps }) => (
						<Tracker {...{ name, reps }} />
					))}
				</table>
				<table className="tracking-small">
					{workout.exercises.map(({ name, reps }) => (
						<TrackerSmall {...{ name, reps }} />
					))}
				</table>
				<Counter {...{rounds: workout.rounds, calories: workout.calories, duration: workout.duration}}/>
				<Button
					onClick={handleFinishWorkout}
					variant="success"
					className="timeButt"
				>
					Finish Workout
				</Button>
			</section>
		</div>
	);
}

export default Details;
