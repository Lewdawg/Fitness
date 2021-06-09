import './profile-success.styles.css';

import { NavLink } from 'react-router-dom';

function ProfileSuccess() {
	return (
		<div
			id="profileSuccess"
			className="fadeInDown alert alert-success mt-3 w-75 mx-auto d-flex flex-column align-items-center"
		>
			<h1>You have updated Your Profile successfully !</h1>
			<NavLink to="/profile" className="btn-c w-50">
				Profile
			</NavLink>
		</div>
	);
}

export default ProfileSuccess;
