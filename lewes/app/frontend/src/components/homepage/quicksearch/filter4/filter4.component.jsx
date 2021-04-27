const { default: Card } = require("../../../card/card.component");

function Filter4({ filterState, setFilterState, payload, setPayload }) {



    return (

        <>
            <div className="d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            {/* <button type="button" className="btn btn-primary m-3" onClick={() => {
					setFilterState({ ...filterState, filter2: false, filter3: true });
					setPayload({ ...payload, filter2: 'filter2 first' });
				}}>
				filter2 first
			</button>

			<button type="button" className="btn btn-primary m-3" onClick={() =>{
					setFilterState({ ...filterState, filter2: false, filter3: true });
					setPayload({ ...payload, filter2: 'filter2 second' });
				}}>
				filter2 second
			</button> */}
        </>
    );
}

export default Filter4;