import './workout.styles.css';
import { Link } from 'react-router-dom';

function Workout({ workout }) {
	const dynamicStyling = {
		backgroundColor:
			workout.difficulty === 'easy'
				? '#d4edda'
				: workout.difficulty === 'medium'
				? '#fff3cd'
				: '#f8d7da',
	};
	return (
		<div className="workout fadeInDown" style={dynamicStyling}>
			<div className="card-body text-center">
				<img src={workout.img} className="img img-responsive img-thumbnail" />
				<div className="card-title mt-2">
					<h4>
						<u>{workout.title}</u>
					</h4>
				</div>

				<div className="row-4">
					<div className="profile-overview">
						<h5 className="col">Location: {workout.location}</h5>
					</div>
				</div>

				<div className="row-4">
					<div className="profile-overview">
						<h5 className="col">Duration: {workout.duration} Min</h5>
					</div>
				</div>

				<div className="row-4">
					<div className="profile-overview">
						<h5 className="col">Calories: {workout.calories} cal</h5>
					</div>
				</div>

				<Link
					to={{pathname: "/workouts/details", state: {workout}}}
					className="btn btn-primary col-12 mx-auto my-3"
				>
					Details
				</Link>
			</div>
		</div>
	);
}

export default Workout;
