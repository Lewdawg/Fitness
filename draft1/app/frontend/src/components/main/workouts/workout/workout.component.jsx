import './workout.styles.css';
import { Link } from 'react-router-dom';

function Workout({ workout }) {
	return (

			<div className='workout'>
				<div className="card-body text-center">
					<img src={workout.img} className="img img-responsive img-thumbnail" />
					<div className="card-title mt-2">
						<h4>
							<u>{workout.title}</u>
						</h4>
					</div>

					<div className="row-4 m-3">
						<div className="profile-overview">
							<h5 className="col">Duration: {workout.duration}</h5>
						</div>
					</div>

					<div className="row-4 m-3">
						<div className="profile-overview">
							<h5 className="col">Calories: {workout.calories} cal</h5>
						</div>
					</div>

					<Link to='/workouts/details' className="btn btn-primary col-12 mx-auto my-3 ">
						Details
					</Link>
				</div>
			</div>

	);
}

export default Workout;
