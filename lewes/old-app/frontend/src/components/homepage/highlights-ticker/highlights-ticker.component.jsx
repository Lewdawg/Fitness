import './highlights-ticker.styles.css';

function HighlightsTicker() {
	return (
		<div class="highlights-ticker position-absolute top-0 w-100 text-dark bg-warning">
			<div class="highlights-ticker-content">
				<div class="part-1">
					<h3>Total Calories Burned: 25523cal</h3>
					<h3>Total Workouts Completed: 104</h3>
					<h3>Total Repetitions Executed: 17005</h3>
				</div>
				<div class="part-2">
					<h3>Total Calories Burned: 25523cal</h3>
					<h3>Total Workouts Completed: 104</h3>
					<h3>Total Repetitions Executed: 17005</h3>
				</div>
			</div>
		</div>
	);
}

export default HighlightsTicker;
