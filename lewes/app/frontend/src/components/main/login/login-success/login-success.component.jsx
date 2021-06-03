import { NavLink } from 'react-router-dom';

function LoginSuccess() {
	return (
		<div
			id="loginSuccess"
			className="fadeInDown alert alert-success mt-3 w-75 mx-auto d-flex flex-column align-items-center"
		>
			<h1>Congratulation, you are logged in</h1>
			<NavLink to="/profile" className="btn-c w-50">
				Profile
			</NavLink>
		</div>
	);
}

export default LoginSuccess;
