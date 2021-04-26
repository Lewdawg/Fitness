import { useState } from 'react';

import './homepage.styles.css';
import HighlightsTicker from './highlights-ticker/highlights-ticker.component.jsx';
import Card from '../card/card.component.jsx';
import Filter0 from './quicksearch/filter0/filter0.component.jsx';
import Filter1 from './quicksearch/filter1/filter1.component.jsx';
import Filter2 from './quicksearch/filter2/filter2.component.jsx';
import Filter3 from './quicksearch/filter3/filter3.component.jsx';
import Filter4 from './quicksearch/filter4/filter4.component.jsx';

function Homepage() {

	const [filterState, setFilterState] = useState({
		filter0: true,
		filter1: false,
		filter2: false,
		filter3: false,
		filter4: false
	});

	const reload = () => {
		window.location.reload()
	}

	const [payload, setPayload] = useState({})

	return (
		<main className="homepage d-flex position-relative justify-content-center flex-column align-items-center img-fluid">
			{/* <HighlightsTicker /> */}

			{filterState.filter0 && <Filter0 {...{ filterState, setFilterState, payload, setPayload }} />}

			{filterState.filter1 && <Filter1 {...{ filterState, setFilterState, payload, setPayload }} />}

			{filterState.filter2 && <Filter2 {...{ filterState, setFilterState, payload, setPayload }} />}

			{filterState.filter3 && <Filter3 {...{ filterState, setFilterState, payload, setPayload }} />}

			{filterState.filter4 && <Filter4 {...{ filterState, setFilterState, payload, setPayload }} />}

			<button className="btn btn-primary mw-50 fs-4 m-2 p-2 btn-lg" onClick={reload}>Refresh Page</button>


		</main>
	);
}

export default Homepage;
