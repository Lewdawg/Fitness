import './profile.styles.css';
import { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext.js';

function Profile() {
	const { username, setLoggedIn } = useContext(AppContext);
	const history = useHistory();
	const workoutPlaceholder = {
		title: 'Placeholder',
		difficulty: '',
		duration: 0,
		location: '',
		exercises: [{ name: '', reps: '', sets: '' }],
		rounds: '',
		calories: '',
		img: 'https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png',
	};

	/* STATES */
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [gender, setGender] = useState('');
	const [img, setImg] = useState('');
	const [fileUpload, setFileUpload] = useState({});
	const [workouts, setWorkouts] = useState([]);
	const [latestWorkout, setLatestWorkout] = useState({});
	const [favWorkout, setFavWorkout] = useState({});
	const [totalCalories, setTotalCalories] = useState(0);
	const [totalWorkouts, setTotalWorkouts] = useState(0);

	useEffect(() => {
		axios
			.post('/api/profile', { username })
			.then(
				({
					data: { name, age, country, height, weight, gender, img, workouts },
				}) => {
					/* console.log('name:', name);
					console.log('age:', age);
					console.log('country:', country);
					console.log('height:', height);
					console.log('weight:', weight);
					console.log('gender:', gender);
					console.log('img:', img);
					console.log('workouts:', workouts); */
					setName(name);
					setAge(age);
					setCountry(country);
					setHeight(height);
					setWeight(weight);
					setGender(gender);
					setImg(
						img === null || img === ''
							? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
							: img
					);
					setWorkouts(workouts);
					setLatestWorkout(
						workouts.length === 0
							? workoutPlaceholder
							: workouts[workouts.length - 1]
					);
					setFavWorkout(
						workouts.length === 0
							? workoutPlaceholder
							: workouts.sort((w1, w2) => w1.counter < w2.counter)[0]
					);
					setTotalCalories(
						workouts.length === 0
							? 0
							: workouts.reduce(
									(acc, workout) => acc + workout.calories * workout.counter,
									0
							  )
					);
					setTotalWorkouts(
						workouts.length === 0
							? 0
							: workouts.reduce((acc, workout) => acc + workout.counter, 0)
					);
				}
			)
			.catch((e) => {
				setLoggedIn(false);
				history.push('/unauthorized');
			});
	}, []);

	const displayProfileImage = async (e) => {
		setFileUpload(e.target.files[0]);
		setImg(URL.createObjectURL(e.target.files[0]));
	};

	const handleUpdate = async (e) => {
		try {
			const formData = new FormData();

			formData.append('email', username);
			formData.append('name', name);
			formData.append('age', age);
			formData.append('country', country);
			formData.append('height', height);
			formData.append('weight', weight);
			formData.append('gender', gender);
			formData.append('img', fileUpload);

			await axios.post('/api/updateProfile', formData);

			history.push('/profileSuccess');
		} catch (e) {
			history.push('/unauthorized');
		}
	};

	const dynamicStylingLatest = {
		backgroundColor:
			latestWorkout.difficulty === 'easy'
				? '#d4edda'
				: latestWorkout.difficulty === 'medium'
				? '#fff3cd'
				: latestWorkout.difficulty === 'hard'
				? '#f8d7da'
				: 'grey',
	};

	const dynamicStylingFav = {
		backgroundColor:
			favWorkout.difficulty === 'easy'
				? '#d4edda'
				: favWorkout.difficulty === 'medium'
				? '#fff3cd'
				: favWorkout.difficulty === 'hard'
				? '#f8d7da'
				: 'grey',
	};

	return (
		<>
			{/* <h1 className="profileHeader wrapper fadeInDown mt-1">Your Profile</h1> */}
			<div id="profile" className="wrapper fadeInDown mt-1">
				{/* <div id="personalInfo"> */}
				<div className="profileImage fadeInDown">
					<label for="fileUpload">
						<img src={img} alt="profile Image" className="userImg" />
					</label>
					<input
						id="fileUpload"
						type="file"
						style={{ display: 'none' }}
						onChange={displayProfileImage}
					/>
				</div>
				<Card className="aboutMe fadeInDown">
					<Card.Title className="cardTitle fadeIn first mt-2">
						About Me
					</Card.Title>
					<Card.Text className="cardText fadeIn second">
						<label htmlFor="name">Name:</label>
						<input
							id="personalInput"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<br />
						<label htmlFor="age">Age:</label>
						<input
							id="personalInput"
							type="number"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
						/>
						<br />
						<label htmlFor="country">Country:</label>
						<input
							id="personalInput"
							type="text"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
						<br />
						<label htmlFor="height">Height:</label>
						<input
							id="personalInput"
							type="number"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
						/>
						<br />
						<label htmlFor="weight">Weight:</label>
						<input
							id="personalInput"
							type="number"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
						<br />
						<label htmlFor="gender">Gender:</label>
						<input
							id="personalInput"
							type="text"
							value={gender}
							onChange={(e) => setGender(e.target.value)}
						/>
					</Card.Text>
				</Card>
				<div className="flip-cards fadeInDown">
					<div class="flip-card mt-5">
						<div class="flip-card-inner" style={dynamicStylingLatest}>
							<div class="flip-card-front">
								<h3> Latest </h3>
								<img src={latestWorkout.img} alt="Avatar" />
							</div>
							<div class="flip-card-back" style={dynamicStylingLatest}>
								<div className="card-title mt-2">
									<h4>
										<u>{latestWorkout.title}</u>
									</h4>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">Location: {latestWorkout.location}</h5>
									</div>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">Duration: {latestWorkout.duration}</h5>
									</div>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">
											Calories: {latestWorkout.calories} cal
										</h5>
									</div>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">
											Done: {latestWorkout.counter} time(s)
										</h5>
									</div>
								</div>

								{workouts.length === 0 ? (
									<Button disabled className="btn-c col-12 mx-auto">
										Details
									</Button>
								) : (
									<Link
										className="btn-c col-12 mx-auto"
										disabled={true}
										to={{
											pathname: '/workouts/details',
											state: { workout: latestWorkout },
										}}
									>
										Details
									</Link>
								)}
							</div>
						</div>
					</div>

					<div class="flip-card my-5">
						<div class="flip-card-inner" style={dynamicStylingFav}>
							<div class="flip-card-front">
								<h3> Favourite </h3>
								<img src={favWorkout.img} alt="Avatar" />
							</div>
							<div class="flip-card-back" style={dynamicStylingFav}>
								<div className="card-title mt-2">
									<h4>
										<u>{favWorkout.title}</u>
									</h4>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">Location: {favWorkout.location}</h5>
									</div>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">Duration: {favWorkout.duration}</h5>
									</div>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">Calories: {favWorkout.calories} cal</h5>
									</div>
								</div>

								<div className="row-4">
									<div className="profile-overview">
										<h5 className="col">Done: {favWorkout.counter} time(s)</h5>
									</div>
								</div>

								{workouts.length === 0 ? (
									<Button disabled className="btn-c col-12 mx-auto">
										Details
									</Button>
								) : (
									<Link
										className="btn-c col-12 mx-auto"
										disabled={true}
										to={{
											pathname: '/workouts/details',
											state: { workout: favWorkout },
										}}
									>
										Details
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="bestCards fadeInDown">
					<div
						className=" fadeInDown bestCardLayout"
						style={dynamicStylingLatest}
					>
						<div className="card-body text-center">
							<h3> Latest </h3>
							<img
								src={latestWorkout.img}
								className="img img-responsive img-thumbnail"
								alt="latest workout"
							/>
							<div className="card-title mt-2">
								<h4>
									<u>{latestWorkout.title}</u>
								</h4>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Location: {latestWorkout.location}</h5>
								</div>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Duration: {latestWorkout.duration}</h5>
								</div>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">
										Calories: {latestWorkout.calories} cal
									</h5>
								</div>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Done: {latestWorkout.counter} time(s)</h5>
								</div>
							</div>

							{workouts.length === 0 ? (
								<Button disabled className="btn-c col-12 mx-auto my-3">
									Details
								</Button>
							) : (
								<Link
									className="btn-c col-12 mx-auto my-3"
									disabled={true}
									to={{
										pathname: '/workouts/details',
										state: { workout: latestWorkout },
									}}
								>
									Details
								</Link>
							)}
						</div>
					</div>
					<div className=" fadeInDown bestCardLayout" style={dynamicStylingFav}>
						<div className="card-body text-center">
							<h3> Favourite </h3>
							<img
								src={favWorkout.img}
								className="img img-responsive img-thumbnail"
								alt="favourite workout"
							/>
							<div className="card-title mt-2">
								<h4>
									<u>{favWorkout.title}</u>
								</h4>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Location: {favWorkout.location}</h5>
								</div>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Duration: {favWorkout.duration}</h5>
								</div>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Calories: {favWorkout.calories} cal</h5>
								</div>
							</div>

							<div className="row-4">
								<div className="profile-overview">
									<h5 className="col">Done: {favWorkout.counter} time(s)</h5>
								</div>
							</div>

							{workouts.length === 0 ? (
								<Button disabled className="btn-c col-12 mx-auto my-3">
									Details
								</Button>
							) : (
								<Link
									to={{
										pathname: '/workouts/details',
										state: { workout: favWorkout },
									}}
									className="btn-c col-12 mx-auto my-3"
								>
									Details
								</Link>
							)}
						</div>
					</div>
				</div>
				<div className="personalTotals fadeInDown">
					<p>Calories Burnt: {totalCalories}</p>
					<div></div>
					<p>Total Workouts Completed: {totalWorkouts}</p>
				</div>
				<button className="btn-c update" onClick={handleUpdate}>
					Update
				</button>
			</div>
		</>
	);
}

export default Profile;
