function Filter1({ filterState, setFilterState, payload, setPayload }) {

	const toBeginner = () => {

		setFilterState({ ...filterState, filter1: false, filter2: true });
		setPayload({ ...payload, filter1: 'filter1 first' });
	}

	const toIntermediate = () => {

		setFilterState({ ...filterState, filter1: false, filter3: true });
		setPayload({ ...payload, filter1: 'filter1 first' });
	}

	const toHard = () => {

		setFilterState({ ...filterState, filter1: false, filter4: true });
		setPayload({ ...payload, filter1: 'filter1 first' });
	}

	return (

		<>
			<div id="secondChoice" class="displayNone">
				<button id="beginner" type="button" class="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg" onClick={toBeginner}>Beginner</button>

				<button id="inter" type="button" class="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg" onClick={toIntermediate}>intermediate</button>

				<button id="hard" type="button" class="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg" onClick={toHard}>Hard</button>
			</div>
		</>
	);
}

export default Filter1;
