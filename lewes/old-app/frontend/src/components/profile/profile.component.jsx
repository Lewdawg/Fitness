import './profile.styles.css';

import { useState } from 'react';


import PersonalRecords from './personalRecords/ppRecords.jsx';
import PersonalInfo from './personalInfo/personalInfo.jsx';

function ProfilePage() {

	// const [usersName, setUsersName] = useState('')
	// const [usersAge, setUsersAge] = useState('')
	// const [usersCountry, setUsersCountry] = useState('')
	// const [usersHeight, setUsersHeight] = useState('')
	// const [usersWeight, setUsersWeight] = useState('')
	// const [usersGender, setUsersGender] = useState('')

	// const [usersTotalCalories, setUsersTotalCalories] = useState('')
	// const [userCompletedWO, setUsersCompletedWO] = useState('')

	// const [usersFavWorkout, setUsersFavWorkout] = useState('')
	// const [usersLastWorkout, setUsersLastWorkout] = useState('')


	return (
		<>
			<h1 className="profileHeader wrapper fadeInDown mt-1">Your Profile</h1>
			<div id="userProfilePage" className="wrapper fadeInDown mt-1">
				<PersonalRecords {...{
					// usersTotalCalories,
					// userCompletedWO,
					// usersFavWorkout,
					// usersLastWorkout
				}} />
				<PersonalInfo {...{
					// usersName,
					// setUsersName,
					// usersAge,
					// setUsersAge,
					// usersCountry,
					// setUsersCountry,
					// usersHeight,
					// setUsersHeight,
					// usersWeight,
					// setUsersWeight,
					// usersGender,
					// setUsersGender
				}} />
			</div>
		</>
	);
}

export default ProfilePage;
