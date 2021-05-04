import './personalInfoTop.css';
import banana from '../../banana.jpg'

import Card from 'react-bootstrap/Card'



function PersonalInfoTop() {


    return (

        <div className="ppInfoImage" style={{ width: '95%', height: '58%' }}>


            <Card className="aboutMe" style={{ width: '48%', height: '85%' }}>
                <Card.Title className="cardTitle">About Me</Card.Title>
                <Card.Text className="cardText">
                    Name: Lewes Walton <br />
                Age: 31 <br />
                From: UK <br />
                Height: 180 cm <br />
                Current Weight: 91 kgs <br />
                Gender: M <br />

                </Card.Text>
            </Card>

            <img src={banana} alt="" className="userImg" style={{ width: '48%', height: '85%' }} />
        </div>
    )
}

export default PersonalInfoTop
