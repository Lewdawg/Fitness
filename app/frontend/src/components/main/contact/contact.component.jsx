import './contact.styles.scss';
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
	const [emailValidate, setEmailValidate] = useState(false);
	const [nameValidate, setNameValidate] = useState(false);
	const [messageValidate, setMessageValidate] = useState(false);

	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [messageValue, setMessageValue] = useState('');

	const successRef = useRef();
	const dangerRef = useRef();

	const nameOnchange = (e) => {
		setNameValue(e.target.value);
		setNameValidate(
			e.target.value.length > 2 &&
				e.target.value.length < 20 &&
				e.target.value.match(/^[A-Za-z ]+$/)
		);
	};

	const emailOnchange = (e) => {
		setEmailValue(e.target.value);
		setEmailValidate(
			e.target.value.length > 4 &&
				e.target.value.length < 50 &&
				e.target.value.match(
					/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
				)
		); // regex
	};

	const messageOnchange = (e) => {
		setMessageValue(e.target.value);
		setMessageValidate(
			e.target.value.length > 4 && e.target.value.length < 160
		);
	};

	const submitBtnClick = (e) => {
		e.preventDefault();
		const sendData = {
			name: nameValue,
			email: emailValue,
			message: messageValue,
		};
		// send button disabled
		fetch('api/contact', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(sendData),
		}).then((res) => {
			if (res.status === 204) {
				// show success message
				successRef.current.classList.remove('d-none');
				dangerRef.current.classList.add('d-none');
				console.log('Done');
			} else {
				// show error message
				successRef.current.classList.add('d-none');
				dangerRef.current.classList.remove('d-none');
			}
		});
	};

	return (
		<div id="contact" className="wrapper fadeInDown">
			<div id="formContent">
				<h1>Contact us</h1>

				<form>
					<div
						className="alert alert-success d-none mt-3"
						role="alert"
						ref={successRef}
					>
						Your message has been sent successfully,
						<br />
						We will contact You as soon as possible :)
					</div>

					<div
						className="alert alert-danger d-none mt-3"
						role="alert"
						ref={dangerRef}
					>
						Can't send your message :(
						<br />
						please try again later ...
					</div>

					<div className="fadeIn first">
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Your name"
							value={nameValue}
							onChange={(e) => {
								nameOnchange(e);
							}}
							className={
								nameValue === ''
									? ''
									: nameValidate
									? 'icon icon--green'
									: 'icon icon--red'
							}
						/>
						<div className="input-message">
							{nameValue !== '' &&
								(nameValidate ? (
									<div className="invalid-feedback--green invalid-feedback">
										<p>Name is valid !</p>
									</div>
								) : (
									<div className="invalid-feedback--red invalid-feedback">
										<p>Name should be between 3 & 50 letters only !</p>
									</div>
								))}
						</div>
						<div className="invalid-feedback">
							<p>Name should be between 3 & 50 letters only !</p>
						</div>
					</div>

					<div className="fadeIn second">
						<input
							id="email"
							name="email"
							type="text"
							placeholder="Your email"
							value={emailValue}
							onChange={(e) => {
								emailOnchange(e);
							}}
							className={
								emailValue === ''
									? ''
									: emailValidate
									? 'icon icon--green'
									: 'icon icon--red'
							}
						/>
						<div className="input-message">
							{emailValue !== '' &&
								(emailValidate ? (
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

					<div className="fadeIn third">
						<textarea
							id="message"
							name="message"
							type="text"
							placeholder="Please enter your message here ..."
							rows="5"
							value={messageValue}
							onChange={(e) => {
								messageOnchange(e);
							}}
							className={
								messageValue === ''
									? ''
									: messageValidate
									? 'icon icon--green'
									: 'icon icon--red'
							}
						></textarea>
						<div className="input-message">
							{messageValue !== '' &&
								(messageValidate ? (
									<div className="invalid-feedback--green invalid-feedback">
										<p>Message valid!</p>
									</div>
								) : (
									<div className="invalid-feedback--red invalid-feedback">
										<p>message should be between 5 & 160 letters only !</p>
									</div>
								))}
						</div>
					</div>

					<input
						type="submit"
						className="fadeIn fourth"
						value="Submit"
						onClick={(e) => {
							submitBtnClick(e);
						}}
					></input>
				</form>

				<div id="formFooter">
					<NavLink className="underlineHover" to=""></NavLink>
				</div>
			</div>
		</div>
	);
}

export default Contact;
