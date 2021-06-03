import './profile.styles.css';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext.js';

function Profile() {
	const { username } = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		axios
			.post('/api/profile', { username })
			.then(({ data: { name, age, country, height, weight, gender } }) => {
				setName(name);
				setAge(age);
				setCountry(country);
				setHeight(height);
				setWeight(weight);
				setGender(gender);
			})
			.catch(console.error);
	}, []);

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [gender, setGender] = useState('');

	const handleSubmit = async(e) => {
		try{
		e.preventDefault();

		axios.post('/api/updateProfile', {
			email: username,
			name,
			age,
			country,
			height,
			weight,
			gender,
		});
		history.push('/profileSuccess');
	} catch(e) {
		history.push('/unauthorized');
	}
	};

	return (
		<div id="profile" className="fadeInDown w-75 mx-auto">
			<h1>Your Profile</h1>
			<Form className="mx-auto" onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Age</Form.Label>
					<Form.Control
						type="number"
						value={age}
						onChange={(e) => setAge(String(e.target.value))}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type="text"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Height</Form.Label>
					<Form.Control
						type="number"
						value={height}
						onChange={(e) => setHeight(String(e.target.value))}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Weight</Form.Label>
					<Form.Control
						type="number"
						value={weight}
						onChange={(e) => setWeight(String(e.target.value))}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Gender</Form.Label>
					<Form.Control
						type="text"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
					/>
				</Form.Group>
				<Button type="submit" className="btn-c">
					Update
				</Button>
			</Form>
		</div>
	);
}

export default Profile;
