import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import './tracker-small.styles.css';

function TrackerSmall({ name, reps }) {
	const [amount, setAmount] = useState(reps);
	const [total, setTotal] = useState(0);

	return (
		<>
			<tr>
				<th>Exercise</th>
				<td>{name.toUpperCase()}</td>
			</tr>

			<tr>
				<th>Amount</th>
				<td>
					<input
						type="number"
						onChange={(e) => e.target.value >= 0 && setAmount(e.target.value)}
						value={amount}
					/>
				</td>
			</tr>
			<tr>
				<th>Total</th>
				<td>
					<input type="number" disabled value={total} />
				</td>
			</tr>

			<tr>
				<th></th>
				<td className="buttons">
					<Button onClick={() => setTotal(+amount + +total)}>Add</Button>

					<Button
						onClick={() =>
							setTotal(+total - +amount >= 0 ? +total - +amount : 0)
						}
					>
						Reduce
					</Button>
				</td>
			</tr>
			<tr>
				<th></th>
			</tr>
		</>
	);
}

export default TrackerSmall;
