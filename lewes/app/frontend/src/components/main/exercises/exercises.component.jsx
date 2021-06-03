import { useState, useEffect } from 'react';
import axios from 'axios';

import './exercises.styles.css';
import Exercise from './exercise/exercise.component.jsx';

function Exercises() {
	useEffect( () => {
		axios('/api/exercises')
			.then(({data: exercises}) => {
				setExercises([{ 'STATE NAME': 'EXERCISES' }, ...exercises]);
			})
			.catch(console.error);
	}, []);

	const [exercises, setExercises] = useState([]);
	return (
		<div id="exercises">
			<div className="exerciseCollection">
				{exercises.map((exercise, index) => {
					if(index === 0 ) return null;
					return <Exercise {...{ key: index + 1, exercise }} />;
				})}
			</div>
		</div>
	);
}

export default Exercises;
