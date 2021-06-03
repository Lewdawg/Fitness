import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import './tracker.styles.css';

function Tracker({ name }) {
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

	return (
		<tr className="tracker">
			<td>{name.toUpperCase()}</td>
			<td>
				<input
					type="number"
					onChange={(e) => setAmount(e.target.value)}
					value={amount}
				/>
			</td>
			<td>
				<input type="number" disabled value={total} />
			</td>
			<td>
				<Button onClick={() => setTotal(+amount + +total)}>Add</Button>
			</td>
		</tr>
	);
}

export default Tracker;
