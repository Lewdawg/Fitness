import { NavLink } from 'react-router-dom';

function RegisterSuccess() {

	return (
						<div id='registerSuccess'
							className="fadeInDown alert alert-success mt-3 w-75 mx-auto d-flex flex-column align-items-center"
						>
							<h1>Congratulation, you are registered</h1>
                            <NavLink to='/login' className='btn-c w-50'>Login</NavLink>
						</div>

	);
}

export default RegisterSuccess;
