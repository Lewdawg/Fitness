import './personalInfo.css'

import banana from '../banana.jpg'

import { useState } from 'react';
import Card from 'react-bootstrap/Card'

// import PersonalInfoTop from './top/personalInfoTop.jsx'
// import PersonalInfoBot from './bottom/personalInfoBot.jsx'

function PersonalInfo({
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
}) {

    const [usersName, setUsersName] = useState('')
    const [usersAge, setUsersAge] = useState('')
    const [usersCountry, setUsersCountry] = useState('')
    const [usersHeight, setUsersHeight] = useState('')
    const [usersWeight, setUsersWeight] = useState('')
    const [usersGender, setUsersGender] = useState('')

    // const [usersInfo, setUsersInfo] = useState('')

    const setUsersInfo = (e) => {
        e.preventDefault();

        const User = {
            method: 'POST',
            url: '',
            data: {
                "name": usersName,
                "age": usersAge,
                "country": usersCountry,
                "height": usersHeight,
                "weight": usersWeight,
                "gender": usersGender
            }
        }
        // axios(User)
        //     .then((result) => {
        //         console.log(result)

        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //         alert('Invalid Email or Password')
        //     })
    }

    return (

        <div className="personalInfo">

            <div className="profileImage">
                <img src={banana} alt="" className="userImg fadeIn first mt-2" />
                <Card className="aboutMe">

                    <Card.Title className="cardTitle fadeIn first mt-2">About Me</Card.Title>
                    <Card.Text className="cardText fadeIn second">
                        <label htmlFor="name">Name:</label>
                        <input id='personalInput' type="text" value={usersName} onChange={(e) => setUsersName(e.target.value)} required /><br />
                        <label htmlFor="age">Age:</label>
                        <input id='personalInput' type="number" value={usersAge} onChange={(e) => setUsersAge(e.target.value)} required /><br />
                        <label htmlFor="country">Country:</label>
                        <input id='personalInput' type="text" value={usersCountry} onChange={(e) => setUsersCountry(e.target.value)} required /><br />
                        <label htmlFor="height">Height:</label>
                        <input id='personalInput' type="number" value={usersHeight} onChange={(e) => setUsersHeight(e.target.value)} required /><br />
                        <label htmlFor="weight">Weight:</label>
                        <input id='personalInput' type="number" value={usersWeight} onChange={(e) => setUsersWeight(e.target.value)} required /><br />
                        <label htmlFor="gender">Gender:</label>
                        <input id='personalInput' type="text" value={usersGender} onChange={(e) => setUsersGender(e.target.value)} required /><br />
                        <button className="btn-c" onSubmit={setUsersInfo}>Update</button>
                    </Card.Text>
                </Card>
            </div>

            {/* <PersonalInfoTop /> */}

            {/* <PersonalInfoBot /> */}

        </div>
    )
}

export default PersonalInfo
