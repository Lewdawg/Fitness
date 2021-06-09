import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

function ConfirmAccount() {
	const [confirmed, setConfirmed] = useState('pending');

	useEffect(() => {
		setTimeout(() => {
			const confirmationKey = window.location.href.split('/').pop();
			axios(`/api/confirmAccount/${confirmationKey}`)
				.then(() => setConfirmed('true'))
				.catch(() => setConfirmed('false'));
		}, 5000);
	}, []);

	return confirmed === 'true' ? (
		<div
			id="confirmationSuccess"
			className="fadeInDown alert alert-success mt-3 w-75 mx-auto d-flex flex-column align-items-center"
		>
			<h1>Your account is now confirmed !</h1>
			<NavLink to="/login" className="btn-c w-50">
				Login
			</NavLink>
		</div>
	) : confirmed === 'false' ? (
		<div
			id="confirmationFailure"
			className="fadeInDown alert alert-danger mt-3 w-75 mx-auto d-flex flex-column align-items-center"
		>
			<h1>There was a problem confirming Your account</h1>
			<h1>Please contact an admin !</h1>
			<NavLink to="/contact" className="btn-c w-50">
				Contact
			</NavLink>
		</div>
	) : (
		<Spinner animation="border" />
	);
}

export default ConfirmAccount;
