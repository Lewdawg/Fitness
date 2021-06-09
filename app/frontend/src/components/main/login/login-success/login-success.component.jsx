import './login-success.styles.css';

import { NavLink } from 'react-router-dom';

function LoginSuccess() {
	return (
		<div
			id="loginSuccess"
			className="fadeInDown alert alert-success mt-3 w-75 mx-auto d-flex flex-column align-items-center"
		>
			<h1>Logged in successfully !</h1>
			<NavLink to="/profile" className="btn-c w-50">
				Profile
			</NavLink>
			<NavLink to="/workouts" className="btn-c w-50">
				Workouts
			</NavLink>
		</div>
	);
}

export default LoginSuccess;
