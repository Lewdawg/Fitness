import './profilePage.css'

import PersonalRecords from './personalRecords/ppRecords.jsx';
import PersonalInfo from './personalInfo/personalInfo.jsx';


function ProfilePage() {



    return (

        <>
            <div id="userProfilePage" style={{ width: '95%', height: '90%' }}>

                <PersonalRecords />
                <PersonalInfo />

            </div>
        </>
    )
}

export default ProfilePage
