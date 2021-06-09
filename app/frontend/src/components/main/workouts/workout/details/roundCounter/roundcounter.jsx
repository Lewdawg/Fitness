import './roundcounter.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Counter({ rounds, calories, duration }) {
	const [count, setCount] = useState(rounds);

	return (
		<div id="roundAndInfo">
			<div className="mainCounter">
				<h3 className="roundsRemaining">Rounds Remaining</h3>

				<h2 className="count">{count}</h2>

				<Button
					variant="danger"
					className="m-1"
					onClick={() => (count - 1 >= 0) && setCount( count - 1 )}
				>
					Round Completed
				</Button>
			</div>

			<div className="calAndDurationInfo">
				<div>
					<p>Calories: {calories}</p>
				</div>

				<div>
					<p>Duration: {duration} min</p>
				</div>
			</div>
		</div>
	);
}

export default Counter;
