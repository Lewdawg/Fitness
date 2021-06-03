import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import './tracker.styles.css';

function Tracker({ name }) {
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

	return (
		<tr className="tracker">
			<td>
				<input type="text" disabled value={name.toUpperCase()} />
			</td>
			<td>
				<input
					type="number"
					onChange={(e) => setAmount(e.target.value)}
					value={amount}
				/>
			</td>
			<td>
				<input type="text" disabled value={total} />
			</td>
			<td>
				<Button onClick={() => setTotal(+amount + +total)}>Add {`${amount}`}</Button>
			</td>
			{/* <td>
				<Button
					onClick={() => setTotal(+total - +amount >= 0 ? +total - +amount : 0)}
				>
					Reduce {`${amount}`}
				</Button>
			</td> */}
		</tr>
	);
}

export default Tracker;
