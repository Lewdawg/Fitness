import './workouts.styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Workout from './workout/workout.component.jsx';

function Workouts({ quickSearchFilter }) {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios('/api/workouts')
			.then((response) =>
				setWorkouts([{ 'STATE NAME': 'WORKOUTS' }, ...response.data])
			)
			.catch(console.error);
	}, []);

	/* 	<div className="card-list">
			{workouts.map((workout, index) => (
				<Card {...{ key: index + 1, workout }} />
			))}
		</div> */

	/* {quickSearchFilter.active
					? workouts.filter((workout, index) => {
							if (
								workout.difficulty === quickSearchFilter.difficulty &&
								workout.duration === quickSearchFilter.duration &&
								workout.location === quickSearchFilter.location
							)
								return (
									<div className="col-md-4">
										<Card {...{ key: index + 1, workout }} />
									</div>
								);
							return null;
					  })
					: workouts.map((workout, index) => {
							if (index === 0) return null;
							return (
								<div className="col-md-4">
									<Card {...{ key: index + 1, workout }} />
								</div>
							);
					  })} */

	setTimeout(() => console.log('workouts:\n', workouts), 3000);
	return (

		<div id="workouts">
			{workouts.map((workout, index) => {
				if (index === 0) return null;
				return <Workout {...{ key: index + 1, workout }} />;
			})}
		</div>

	);
}

export default Workouts;
