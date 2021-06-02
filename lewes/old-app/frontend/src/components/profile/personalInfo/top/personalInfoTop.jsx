import './personalInfoTop.css';
import banana from '../../banana.jpg'

import Card from 'react-bootstrap/Card'



function PersonalInfoTop() {


    return (

        <div className="ppInfoImage">

            <Card className="aboutMe">
                <Card.Title className="cardTitle fadeIn first mt-2">About Me</Card.Title>
                <Card.Text className="cardText fadeIn second">
                    Name: Lewes Walton <br />
                Age: 31 <br />
                From: UK <br />
                Height: 180 cm <br />
                Current Weight: 91 kgs <br />
                Gender: M <br />

                </Card.Text>
            </Card>

            <img src={banana} alt="" className="userImg fadeIn first mt-2" />
        </div>
    )
}

export default PersonalInfoTop
