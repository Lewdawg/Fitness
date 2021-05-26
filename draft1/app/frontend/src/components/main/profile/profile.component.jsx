import './profile.styles.css';

import { useState } from 'react';


import PersonalRecords from './personalRecords/ppRecords.jsx';
import PersonalInfo from './personalInfo/personalInfo.jsx';

function ProfilePage() {


	return (
		<>
			<h1 className="profileHeader wrapper fadeInDown mt-1">Your Profile</h1>
			<div id="userProfilePage" className="wrapper fadeInDown mt-1">
				<PersonalInfo />
				<PersonalRecords />
			</div>
		</>
	);
}

export default ProfilePage;
