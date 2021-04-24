import './homepage.styles.css';
import Makeachoice from './makeachoice'

import HighlightsTicker from './highlights-ticker/highlights-ticker.component.jsx';
import Card from '../card/card.component.jsx';
import { useState } from 'react'


function Homepage() {

	const [showDifficulties, setShowDifficulties] = useState(false)

	const difficulty = () => {

		setShowDifficulties(true)

	}


	return (
		<main className="homepage d-flex position-relative justify-content-center flex-column align-items-center img-fluid">
			{/* <HighlightsTicker /> */}



			<div id="firstChoice">
				<button id="quickChoice" type="button"
					className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg" onClick={difficulty}>Quick Search</button>

				{showDifficulties ? < Makeachoice /> : null}

				<button id="allWorkouts" type="button" className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg">All
				Workouts</button>
			</div>


			{/* <Card /> */}
		</main>
	);
}

export default Homepage;
