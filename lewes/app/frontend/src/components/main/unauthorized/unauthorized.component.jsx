import { NavLink } from 'react-router-dom';

function Unauthorized() {

	return (
						<div id='unauthorized'
							className="fadeInDown alert alert-danger mt-3 w-75 mx-auto d-flex flex-column align-items-center"
						>
							<h1>You are not authorized to view this part of the Application !</h1>
                            <NavLink to='/login' className='btn-c w-50'>Login</NavLink>
						</div>

	);
}

export default Unauthorized;
