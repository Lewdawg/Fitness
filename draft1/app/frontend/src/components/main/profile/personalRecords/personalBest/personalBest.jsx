import './personalBest.css';

import Card from 'react-bootstrap/Card'

function PersonalBest() {



    return (

        <div className="bestCards" style={{ width: '100%', height: '68%' }}>

            <Card className="bestCardLayout" style={{ width: '30%', height: '85%' }}>
                <Card.Title className="bestCardLayoutTitle">Favorite Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails">
                    Workout.title<br />
                Workout.duration <br />
                workout.calories <br />
                how many time completed <br />

                </Card.Text>
            </Card>

            <Card className="bestCardLayout" style={{ width: '30%', height: '85%' }}>
                <Card.Title className="bestCardLayoutTitle">Latest Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails">
                    Workout.title<br />
                Workout.duration <br />
                workout.calories <br />
                how many time completed <br />
                Last time completed <br />

                </Card.Text>
            </Card>

            <Card className="bestCardLayout" style={{ width: '30%', height: '85%' }}>
                <Card.Title className="bestCardLayoutTitle">Next Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails">
                    Workout.title<br />
                Workout.duration <br />
                workout.calories <br />
                how many time completed <br />
                Last time completed <br />

                </Card.Text>
            </Card>


        </div>
    )
}

export default PersonalBest

