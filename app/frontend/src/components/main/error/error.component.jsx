import { NavLink } from 'react-router-dom';

function Error() {
	return (
		<div
			id="error"
			className="fadeInDown alert alert-danger mt-3 w-75 mx-auto d-flex flex-column align-items-center"
		>
			<h1>Opps, an error occured</h1>
			<NavLink to="/profile" className="btn-c w-50">
				Profile
			</NavLink>
		</div>
	);
}

export default Error;
