import './select-buttons.styles.scss';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function SelectButtons({
	workouts,
	setWorkouts,
	quickSearchFilter,
	setQuickSearchFilter,
}) {
	return (
		<div id="select-buttons" className="fadeInDown">
			<Link
				className="btn-c"
				to="/quicksearch"
				onClick={() =>
					setQuickSearchFilter({
						'STATE NAME': 'QUICK SEARCH FILTER',
						location: '',
						duration: '',
						difficulty: '',
						active: true,
					})
				}
			>
				Quick Search
			</Link>
			<Link
				className="btn-c"
				to="/workouts"
				onClick={() =>
					setQuickSearchFilter({ ...quickSearchFilter, active: false })
				}
			>
				All Workouts
			</Link>
		</div>
	);
}

export default SelectButtons;
