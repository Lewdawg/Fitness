import './personalBest.css';

import Card from 'react-bootstrap/Card'

function PersonalBest() {

    return (

        <div className="bestCards">
            <Card className="bestCardLayout">
                <Card.Title className="bestCardLayoutTitle fadeIn first mt-2">Favorite Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails fadeIn second">
                    Workout.title<br />
                Workout.duration <br />
                workout.calories <br />
                how many time completed <br />
                </Card.Text>
            </Card>
            <Card className="bestCardLayout">
                <Card.Title className="bestCardLayoutTitle fadeIn first mt-2">Latest Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails fadeIn second">
                    Workout.title<br />
                Workout.duration <br />
                workout.calories <br />
                how many time completed <br />
                Last time completed <br />
                </Card.Text>
            </Card>
            <Card className="bestCardLayout">
                <Card.Title className="bestCardLayoutTitle fadeIn first mt-2">Next Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails fadeIn second">
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

