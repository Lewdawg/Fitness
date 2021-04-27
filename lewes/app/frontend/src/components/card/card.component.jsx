import './card.styles.css';

function Card() {

	return (

		<div className="card m-4 ">
			<div className="card-body">

				<h5 className="card-title text-center"><u>Card Title</u></h5>

				<div className="col-xs-4">
					<div className="profile-overview">
						<h5>Card Difficulty ....</h5>

					</div>
				</div>
				<div className="col-xs-4">
					<div className="profile-overview">
						<h5>Card Duration .....</h5>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="profile-overview">
						<h5>Card Calories .....</h5>
					</div>
				</div>

				{/* <p className="card-text text-center border-top border-3">Repeat 3 times</p>
				<p className="card-text text-center border-top border-2">What's your best time?</p> */}
				<a href="#" className="btn btn-primary col-12 mx-auto">Start Workout</a>
			</div>
		</div>

	);
}

export default Card;
