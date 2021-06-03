import './personalBest.css';

import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import axios from 'axios';

function PersonalBest() {

    const [userData, setUserData] = useState('')

    useEffect(() =>
        axios("/api/user/workouts")
            .then(workouts => { setUsersFavWorkout(workouts.favWorkout); setUsersLastWorkout(workouts.lastWorkout) })
    )

    const [favWorkout, setUsersFavWorkout] = useState({})
    const [lastWorkout, setUsersLastWorkout] = useState({})

    return (
        <div className="bestCards">
            <Card className="bestCardLayout">
                <Card.Title className="bestCardLayoutTitle fadeIn first mt-2">Favorite Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails fadeIn second">
                    workout.title<br />
                workout.duration <br />
                workout.calories <br />
                how many time completed <br />
                </Card.Text>
            </Card>
            <Card className="bestCardLayout">
                <Card.Title className="bestCardLayoutTitle fadeIn first mt-2">Latest Workout</Card.Title>
                <Card.Text className="bestCardLayoutDetails fadeIn second">
                    workout.title<br />
                workout.duration <br />
                workout.calories <br />
                how many time completed <br />
                Last time completed <br />
                </Card.Text>
            </Card>
        </div>
    )
}

export default PersonalBest

