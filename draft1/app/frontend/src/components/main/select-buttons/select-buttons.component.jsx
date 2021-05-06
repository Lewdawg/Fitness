import './select-buttons.styles.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function SelectButtons({
	workouts,
	setWorkouts,
	display,
	setDisplay,
	quickSearchFilter,
	setQuickSearchFilter,
}) {
	return (
		<div
			id="select-buttons"
			className="d-flex justify-content-center align-items-center"
		>
			<Link to='/quicksearch'>
				<Button
					/* onClick={() => {
						setDisplay({
							...display,
							selectButtons: false,
							quickSearch: true,
						});
						setQuickSearchFilter({ ...quickSearchFilter, active: true });
					}} */
					className="fs-4 p-5 m-5"
				>
					Quick Search
				</Button>
			</Link>
			<Link to='/workouts'>
				<Button
				/* 	onClick={async() => {
						await axios('/api/workouts')
							.then((response) => setWorkouts([{"STATE NAME": "WORKOUTS"}, ...response.data]))
							.catch(console.error);
						setDisplay({ ...display, selectButtons: false, cardList: true });
						setQuickSearchFilter({ ...quickSearchFilter, active: false });
					}} */
					className="fs-4 p-5 m-5"
				>
					All Workouts
				</Button>
			</Link>
		</div>
	);
}

export default SelectButtons;
