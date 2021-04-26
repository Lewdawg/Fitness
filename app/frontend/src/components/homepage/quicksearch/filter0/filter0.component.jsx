function Filter0({ filterState, setFilterState, payload, setPayload }) {

	const toDifficulty = () => {

		setFilterState({ ...filterState, filter0: false, filter1: true });
		setPayload({ ...payload, filter0: "Quicksearch" })
	}

	return (
		<>
			<div id="firstChoice">
				<button id="quickChoice" type="button"
					className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg" onClick={toDifficulty}>Quick Search</button>


				<button id="allWorkouts" type="button" className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg">All
				Workouts</button>
			</div>
		</>
	);
}

export default Filter0;
