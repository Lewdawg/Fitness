import './profilePage.css'

import PersonalRecords from './personalRecords/ppRecords.jsx';
import PersonalInfo from './personalInfo/personalInfo.jsx';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

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
