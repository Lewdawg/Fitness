import './select-buttons.styles.css';
import Button from 'react-bootstrap/Button';

function SelectButtons({
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
			<Button
				onClick={() => {
					setDisplay({
						...display,
						selectButtons: false,
						quickSearch: true,
					});
					setQuickSearchFilter({ ...quickSearchFilter, active: true });
				}}
				className="fs-4 p-5 m-5"
			>
				Quick Search
			</Button>

			<Button
				onClick={() => {
					setDisplay({ ...display, selectButtons: false, cardList: true });
					setQuickSearchFilter({ ...quickSearchFilter, active: false });
				}}
				className="fs-4 p-5 m-5"
			>
				All Workouts
			</Button>
		</div>
	);
}

export default SelectButtons;
