import './card.styles.css';


function Card({ workout }) {



	return (

		<div
			className="card m-4"
			style={{ border: "4px solid red" }}
		>
			<div className="card-body text-center">
				<img src={workout.img} class="img img-responsive img-thumbnail" />
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

				<a href="#" className="btn btn-primary col-12 mx-auto my-3 ">
					Details
				</a>
			</div>
		</div>
	);
}

export default Card;
