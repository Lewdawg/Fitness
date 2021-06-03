import './highlights-icons.styles.css';

function HighlightsIcons({ navbarExpanded }) {
	return (
		<div id="highlights-icons" /* className={navbarExpanded ? 'd-none' : ''} */>
			<i className="fas fa-burn" title="Total Calories Burned">
				&nbsp;25523
			</i>
			<i className="fas fa-dumbbell" title="Total Workouts Completed">
				&nbsp;104
			</i>
			<i className="fas fa-redo" title="Total Repetitions Completed">
				&nbsp;17005
			</i>
		</div>
	);
}

export default HighlightsIcons;
