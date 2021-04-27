const { default: Card } = require("../../../card/card.component");

function Filter3({ filterState, setFilterState, payload, setPayload }) {



	return (

		<>

			<div className="d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			{/* <button type="button" className="btn btn-primary m-3" onClick={() =>{
					setFilterState({ ...filterState, filter3: false, filter0: true });
					setPayload({ ...payload, filter3: 'filter3 first' });
				}}>
				filter3 first
			</button>

			<button type="button" className="btn btn-primary m-3" onClick={() =>{
					setFilterState({ ...filterState, filter3: false, filter0: true });
					setPayload({ ...payload, filter3: 'filter3 second' });
				}}>
				filter3 second
			</button> */}
		</>
	);
}

export default Filter3;
