import './personalInfo.css'
import banana from '../banana.jpg'

import Card from 'react-bootstrap/Card'

function PersonalInfo() {



    return (

        <div className="ppInfo" style={{ width: '38%', height: '95%' }}>

            <div className="ppInfoImage" style={{ width: '95%', height: '58%' }}>


                <Card>
                    <Card.Title className="cardTitle">About Me</Card.Title>
                    <Card.Text className="cardText">
                        Name: Lewes Walton <br />
                        From: UK <br />
                        Height: 180 cm <br />
                        Current Weight: 91 kgs <br />
                        Gender: M <br />

                    </Card.Text>
                </Card>

                <img src={banana} alt="" className="userImg" style={{ width: '50%', height: '70%' }} />
            </div>

            <div className="ppInfoDescription" style={{ width: '95%', height: '38%' }}>

                <h2>Title</h2>

            </div>

        </div>
    )
}

export default PersonalInfo
