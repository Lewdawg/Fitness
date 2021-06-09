import './login.styles.css';
import { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext.js';
import axios from 'axios';

function Login() {
	const history = useHistory();
	const {setLoggedIn, setUsername} = useContext(AppContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await axios.post('api/login', { email, password });
			setLoggedIn(true);
			setUsername(email);
			history.push('/login/success');
		} catch (error) {
			setLoginFailed(true);
			setLoggedIn(false);
			history.push('/login');
		}
	};

	return (
		<>
			<div id="login" className="wrapper fadeInDown">
				<div id="formContent">
					<h1>Login</h1>

					<form onSubmit={handleSubmit}>
						<div
							id="loginFailed"
							className={loginFailed && 'alert alert-danger'}
						>
							Your login failed.
						</div>
						<input
							type="text"
							className="fadeIn first mt-2"
							name="email"
							required
							value={email}
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						></input>
						<input
							type="password"
							className="fadeIn second"
							name="password"
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></input>
						<input
							type="submit"
							className="fadeIn fourth"
							value="Log in"
						></input>
					</form>

					<div id="formFooter">
						<NavLink className="underlineHover" to="./register">
							Not registered ?
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
