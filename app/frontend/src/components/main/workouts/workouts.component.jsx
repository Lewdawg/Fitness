import './workouts.styles.css';
import { useState, useEffect, useContext } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import axios from 'axios';

import Workout from './workout/workout.component.jsx';

function Workouts() {
	const { quickSearchFilter } = useContext(AppContext);
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios('/api/workouts')
			.then(({ data }) => {
				if (quickSearchFilter.active) {
					const filteredWorkouts = data.filter(
						(workout) =>
							(workout.difficulty === quickSearchFilter.difficulty ||
								quickSearchFilter.difficulty === '') &&
							(workout.location === quickSearchFilter.location ||
								quickSearchFilter.location === '') &&
							((workout.duration <= 20 &&
								quickSearchFilter.duration === '<=20') ||
								(workout.duration > 20 &&
									workout.duration <= 40 &&
									quickSearchFilter.duration === '>20 & <=40') ||
								(workout.duration > 40 &&
									quickSearchFilter.duration === '>40') ||
								quickSearchFilter.duration === '')
					);
					setWorkouts([{ 'STATE NAME': 'WORKOUTS' }, ...filteredWorkouts]);
					return;
				}
				setWorkouts([{ 'STATE NAME': 'WORKOUTS' }, ...data]);
			})
			.catch(console.error);
	}, []);

	/* setTimeout(() => console.log('workouts:\n', workouts), 3000); */

	return (
		<div id="workouts">
			<h1 className="fadeIn">Amount of Workouts: {workouts.length - 1}</h1>
			<div className="workouts-container">
				{workouts.map((workout, index) => {
					if (index === 0) return null;
					return <Workout {...{ key: index + 1, workout }} />;
				})}
			</div>
		</div>
	);
}

export default Workouts;
