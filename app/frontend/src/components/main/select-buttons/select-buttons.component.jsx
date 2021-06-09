import './select-buttons.styles.scss';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import AppContext from '../../../contexts/AppContext.js';

function SelectButtons() {
	const {quickSearchFilter, setQuickSearchFilter} = useContext(AppContext);
	return (
		<div id="select-buttons" className="fadeInDown">
			<div>
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
		</div>
	);
}

export default SelectButtons;
