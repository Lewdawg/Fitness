import './profile.styles.css';

import PersonalRecords from './personalRecords/ppRecords.jsx';
import PersonalInfo from './personalInfo/personalInfo.jsx';

function ProfilePage() {
	return (
		<>
			<div id="userProfilePage">
				<PersonalRecords />
				<PersonalInfo />
			</div>
		</>
	);
}

export default ProfilePage;
