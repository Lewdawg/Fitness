import './exercises.styles.css';
import Exercise from './exercise/exercise.component.jsx';

function Exercises() {
	const exercises = [
		{
			title: 'Push-Ups',
			instructions: [
				'Get down on all fours, placing your hands slightly wider than your shoulders.',
				'Straighten your arms and legs.',
				'Lower your body until your chest nearly touches the floor.',
				'Pause, then push yourself back up.',
				'Repeat.',
			],
			img: 'https://images.unsplash.com/photo-1514512364185-4c2b0985be01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
		},
		{
			title: 'Pull-Ups',
			instructions: [
				'Grab The Bar. Grip it about shoulder-width apart. ...',
				'Hang. Raise your feet off the floor by bending your knees. ...',
				'Pull. Pull yourself up by pulling your elbows down to the floor. ...',
				'Pass The bar. ...',
				'Repeat.',
			],
			img: 'https://images.unsplash.com/photo-1520334363269-c1b342d17261?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80',
		},
		{
			title: 'Squats',
			instructions: [
				'Stand straight with feet hip-width apart. ...',
				'Tighten your stomach muscles. ...',
				'Lower down, as if sitting in an invisible chair. ...',
				'Straighten your legs to lift back up. ...',
				'Repeat the movement.',
			],
			img: 'https://images.unsplash.com/photo-1566241134883-13eb2393a3cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		},
		{
			title: 'Pull-Ups',
			instructions: [
				'Grab The Bar. Grip it about shoulder-width apart. ...',
				'Hang. Raise your feet off the floor by bending your knees. ...',
				'Pull. Pull yourself up by pulling your elbows down to the floor. ...',
				'Pass The bar. ...',
				'Repeat.',
			],
			img: 'https://images.unsplash.com/photo-1520334363269-c1b342d17261?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80',
		},
		{
			title: 'Push-Ups',
			instructions: [
				'Get down on all fours, placing your hands slightly wider than your shoulders.',
				'Straighten your arms and legs.',
				'Lower your body until your chest nearly touches the floor.',
				'Pause, then push yourself back up.',
				'Repeat.',
			],
			img: 'https://images.unsplash.com/photo-1514512364185-4c2b0985be01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
		},
		{
			title: 'Pull-Ups',
			instructions: [
				'Grab The Bar. Grip it about shoulder-width apart. ...',
				'Hang. Raise your feet off the floor by bending your knees. ...',
				'Pull. Pull yourself up by pulling your elbows down to the floor. ...',
				'Pass The bar. ...',
				'Repeat.',
			],
			img: 'https://images.unsplash.com/photo-1520334363269-c1b342d17261?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80',
		},
	];
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
