import Button from 'react-bootstrap/Button';

import './details.styles.css';
import { useState } from 'react';

import Counter from './roundCounter/roundcounter.jsx';
import StopWatch from './stopwatch/stopwatch.jsx';
import Tracker from './tracker/tracker.component.jsx';

function Details({ location }) {
	const { workout } = (location && location.state) || {
		title: 'problems with location or location.state',
	};
	return (
		<div id="details" className="fadeInDown">
			<h1>{workout.title}</h1>

			<section className="cardLayout">
				<StopWatch />

				<table className='tracking'>
					<tr>
						<th>Exercise</th>
						<th>Amount</th>
						<th>Total</th>
						<th>Add</th>
						{/* <th>Reduce</th> */}
					</tr>
					{workout.exercises.map(({ name }) => (
						<Tracker {...{ name }} />
					))}
				</table>
				<Counter />
			</section>
		</div>
	);
}

export default Details;
