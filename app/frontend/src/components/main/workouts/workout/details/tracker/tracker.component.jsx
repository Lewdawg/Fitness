import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import './tracker.styles.css';

function Tracker({ name, reps }) {
	const [amount, setAmount] = useState(reps);
	const [total, setTotal] = useState(0);

	return (
		<tr className="tracker">
			<td>{name.toUpperCase()}</td>
			<td>
				<input
					type="number"
					onChange={(e) => e.target.value >= 0 && setAmount(e.target.value)}
					value={amount}
				/>
			</td>
			<td>
				<input type="number" disabled value={total} />
			</td>
			<td>
				<Button onClick={() => setTotal(+amount + +total)}>Add</Button>
			</td>
			<td>
				<Button onClick={() => setTotal((+total - +amount) >= 0 ? (+total - +amount) : 0)}>
					Reduce
				</Button>
			</td>
		</tr>
	);
}

export default Tracker;
