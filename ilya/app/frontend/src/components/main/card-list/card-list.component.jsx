import Card from './card/card.component.jsx';

import './card-list.styles.css';


function CardList({ workouts, quickSearchFilter }) {

	return (

		/* 	<div className="card-list">
			{workouts.map((workout, index) => (
				<Card {...{ key: index + 1, workout }} />
			))}
		</div> */

		<div className="card-list">

			{/* Basically... if true display Card */}
			{quickSearchFilter.active ? workouts.filter((workout, index) => {
				if (
					workout.difficulty === quickSearchFilter.difficulty &&
					workout.duration === quickSearchFilter.duration &&
					workout.location === quickSearchFilter.location
				)
					return <Card {...{ key: index + 1, workout }} />;
				return false;

			})
				// If false display 
				: workouts.map((workout, index) => {
					if (index === 0) return true;
					return <Card {...{ key: index + 1, workout }} />;
				})}
		</div>
	);
}

export default CardList;
