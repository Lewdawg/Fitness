import './register.styles.scss';
import { useState, useRef, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ticTacToe as TicTacToe } from 'i-am-not-a-robot';

function Register() {
	useEffect(
		() => TicTacToe(captchaRef.current, () => setTicTacToeIsValid(true)),
		[]
	);
	useEffect(
		() => () => {
			if (captchaRef.current !== null) captchaRef.current.innerHTML = '';
		},
		[]
	);

	const history = useHistory();

	/* useRefs */
	const captchaRef = useRef();

	/* useStates */
	const [emailValue, setEmailValue] = useState('');
	const [emailIsValid, setEmailIsValid] = useState(false);

	const [passwordValue, setPasswordValue] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState(false);

	const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
	const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);

	const [TicTacToeIsValid, setTicTacToeIsValid] = useState(false);

	/* const [submitEnabled, setSubmitEnabled] = useState(false); */

	const [registrationFailed, setRegistrationFailed] = useState(false);

	/* onChange handlers */
	const emailOnchange = (event) => {
		setEmailValue(event.target.value);
		setEmailIsValid(
			event.target.value.length > 4 &&
				event.target.value.length < 50 &&
				event.target.value.match(
					/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
				)
		);
		/* request to db necessary to check for availability */
	};

	const passwordOnchange = (event) => {
		setPasswordValue(event.target.value);

		event.target.value === confirmPasswordValue
			? setConfirmPasswordIsValid(true)
			: setConfirmPasswordIsValid(false);

		const strongRegex = new RegExp(
			'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
		);
		const mediumRegex = new RegExp(
			'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
		);

		strongRegex.test(event.target.value)
			? setPasswordIsValid('strong')
			: mediumRegex.test(event.target.value)
			? setPasswordIsValid('medium')
			: setPasswordIsValid('invalid');
	};

	const confirmPasswordOnchange = (event) => {
		setConfirmPasswordValue(event.target.value);

		passwordValue === event.target.value
			? setConfirmPasswordIsValid(true)
			: setConfirmPasswordIsValid(false);
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			await axios.post('/api/register', {
				email: emailValue,
				password: passwordValue,
				approved: false,
			});
			history.push('/register/success');
		} catch (error) {
			/* axios specific: throws error when status is 4** || 5** ==> checking status not necessary */
			setRegistrationFailed(true);
		}
	};

	/* static check (computed value) */
	const formIsValid =
		emailIsValid &&
		(passwordIsValid === 'strong' || passwordIsValid === 'medium') &&
		confirmPasswordIsValid &&
		TicTacToeIsValid;

	return (
		<>
			<div id="register" className="wrapper fadeInDown">
				<div id="formContent">
					<h1>Register</h1>
					<form>
						<div
							id="registrationFailed"
							className={registrationFailed && 'alert alert-danger'}
						>
							We couldn't submit your data.
						</div>

						{/* EMAIL */}
						<div className="fadeIn first mt-2">
							<input
								type="text"
								id="email"
								name="email"
								required
								placeholder="E-Mail"
								onChange={emailOnchange}
								value={emailValue}
								className={
									emailValue === ''
										? ''
										: emailIsValid
										? 'icon icon--green'
										: 'icon icon--red'
								}
							></input>
							<div className="input-message">
								{emailValue !== '' &&
									(emailIsValid ? (
										<div className="invalid-feedback--green invalid-feedback">
											<p>This Email is valid !</p>
										</div>
									) : (
										<div className="invalid-feedback--red invalid-feedback">
											<p>Invalid Email!</p>
										</div>
									))}
							</div>
						</div>

						{/* PASSWORD */}
						<div className="fadeIn second">
							<input
								type="password"
								id="password"
								name="password"
								required
								placeholder="Password"
								onChange={passwordOnchange}
								className={
									passwordValue === ''
										? ''
										: passwordIsValid === 'strong'
										? 'icon icon--green'
										: passwordIsValid === 'medium'
										? 'icon icon--orange'
										: 'icon icon--red'
								}
								value={passwordValue}
							></input>

							<div className="input-message">
								{passwordValue !== '' &&
									(passwordIsValid === 'strong' ? (
										<div className="invalid-feedback--green invalid-feedback show">
											<p>Strong Password!</p>
										</div>
									) : passwordIsValid === 'medium' ? (
										<div className="invalid-feedback--orange invalid-feedback show">
											<p>Medium Password!</p>
										</div>
									) : (
										<div className="invalid-feedback--red invalid-feedback show">
											<p>Invalid Password!</p>
										</div>
									))}
							</div>
						</div>

						{/* CONFIRM PASSWORD */}
						<div className="fadeIn third">
							<input
								type="password"
								id="confirmPassword"
								name="ConfirmPassword"
								required
								placeholder="Confirm Password"
								onChange={confirmPasswordOnchange}
								className={
									passwordValue !== '' || confirmPasswordValue !== ''
										? confirmPasswordIsValid
											? 'icon icon--green'
											: 'icon icon--red'
										: ''
								}
								value={confirmPasswordValue}
							></input>
							<div className="input-message">
								{(passwordValue !== '' || confirmPasswordValue !== '') &&
									(confirmPasswordIsValid ? (
										<div className="invalid-feedback invalid-feedback--green show">
											<p>Correct !</p>
										</div>
									) : (
										<div className="invalid-feedback invalid-feedback--red show">
											<p>Passwords do not match !</p>
										</div>
									))}
							</div>
						</div>

						{/* TicTacToe */}
						<div className="form-group">
							<div ref={captchaRef}></div>
						</div>
						<input
							type="submit"
							className="fadeIn fourth"
							value="Register"
							onClick={handleSubmit}
							disabled={!formIsValid}
						></input>
					</form>

					<div id="formFooter">
						<NavLink className="underlineHover" to="/login">
							Already registered?
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
