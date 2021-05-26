import './exercises.styles.css';
import ExercisesContext from '../../../contexts/exercises/exercises.context.js';
import { useContext } from 'react';
import Exercise from './exercise/exercise.component.jsx';

function Exercises() {
	const exercises = useContext(ExercisesContext);
	return (
		<div id="exercises">
			<h1 className="fadeInDown">Exercises</h1>
			<div className="exerciseCollection">
				{exercises.map((exercise, index) => (
					<Exercise {...{ key: index + 1, exercise }} />
				))}
			</div>
		</div>
	);
}

export default Exercises;
