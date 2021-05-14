import './workouts.styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Workout from './workout/workout.component.jsx';

function Workouts({ quickSearchFilter }) {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios('/api/workouts')
			.then((response) => {
				const responseWorkouts = response.data;
				if (quickSearchFilter.active) {
					const filteredWorkouts = responseWorkouts.filter(
						(workout) =>
							(workout.difficulty === quickSearchFilter.difficulty ||
								quickSearchFilter.difficulty === '') &&
							(workout.location === quickSearchFilter.location ||
								quickSearchFilter.location === '') &&
							(workout.duration === quickSearchFilter.duration ||
								quickSearchFilter.duration === '')
					);
					setWorkouts([{ 'STATE NAME': 'WORKOUTS' }, ...filteredWorkouts]);
					return;
				}
				setWorkouts([{ 'STATE NAME': 'WORKOUTS' }, ...responseWorkouts]);
			})
			.catch(console.error);
	});
	/* question: why 4 times ? setTimeout(() => console.log('workouts:\n', workouts), 3000); */

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
