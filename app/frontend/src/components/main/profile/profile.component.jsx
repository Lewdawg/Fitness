import './profile.styles.css';
import banana from './banana.jpg';
import { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext.js';

function Profile() {
	const { username } = useContext(AppContext);
	const history = useHistory();
	const workoutPlaceholder = {
		title: 'Placeholder',
		difficulty: '',
		duration: 0,
		location: '',
		exercises: [
			{ name: '', reps: '', sets: '' }
		],
		rounds: '',
		calories: '',
		img: 'https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png',
	}

	/* STATES */
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [gender, setGender] = useState('');
	const [img, setImg] = useState('');
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
					setName(name);
					setAge(age);
					setCountry(country);
					setHeight(height);
					setWeight(weight);
					setGender(gender);
					setImg(img);
					setLatestWorkout(workouts.length === 0 ? workoutPlaceholder : workouts[workouts.length - 1]);
					setFavWorkout(workouts.length === 0 ? workoutPlaceholder : workouts.sort((w1, w2) => w1.counter > w2.counter)[0]);
					setTotalCalories(
						workouts.length === 0 ? 0 : workouts.reduce((acc, workout) => acc + workout.calories, 0)
					);
					setTotalWorkouts(
						workouts.length === 0 ? 0 :workouts.reduce((acc, workout) => acc + workout.counter, 0)
					);
				}
			)
			.catch((e) => {
				console.log(e);
				history.push('/error');
			});
	}, []);

	const handleUpdate = async (e) => {
		try {
			await axios.post('/api/updateProfile', {
				email: username,
				name,
				age,
				country,
				height,
				weight,
				gender,
				img,
			});
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
			<div id="userProfilePage" className="wrapper fadeInDown mt-1">
				{/* <div id="personalInfo"> */}
				<div className="profileImage">
					<img src={img} alt="" className="userImg fadeIn first mt-2" />
				</div>
				<Card className="aboutMe">
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
						<br />
						<button className="btn-c" onClick={handleUpdate}>
							Update
						</button>
					</Card.Text>
				</Card>
				{/* </div> */}

				<div className="bestCards">
					<div
						className=" fadeInDown bestCardLayout"
						style={dynamicStylingLatest}
					>
						<div className="card-body text-center">
							{/* <img src={workout.img} className="img img-responsive img-thumbnail" /> */}
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

							<Link
								to={{ pathname: '/workouts/details', state: { workout: latestWorkout } }}
								className="btn btn-primary col-12 mx-auto my-3"
							>
								Details
							</Link>
						</div>
					</div>
					<div className=" fadeInDown bestCardLayout" style={dynamicStylingFav}>
						<div className="card-body text-center">
							{/* <img src={workout.img} className="img img-responsive img-thumbnail" /> */}
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
									<h5 className="col">
										Calories: {favWorkout.calories} cal
									</h5>
								</div>
							</div>

							<Link
								to={{ pathname: '/workouts/details', state: { workout: favWorkout } }}
								className="btn btn-primary col-12 mx-auto my-3"
							>
								Details
							</Link>
						</div>
					</div>
				</div>
				<div className="personalTotals fadeIn second">
					<p>Calories Burnt: {totalCalories}</p>
					<div></div>
					<p>Total Workout Completed: {totalWorkouts}</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
