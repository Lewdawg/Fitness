import './personalTotals.css';

import { useState } from 'react';

function PersonalTotals() {

    fetch('http://example.com/')
        .then(response => response.json())
        .then(data => console.log(data));

    const [usersTotalCalories, setUsersTotalCalories] = useState('')
    const [userCompletedWO, setUsersCompletedWO] = useState('')

    return (
        <div className="personalTotals fadeIn second">
            <p>Calories Burnt: 3300</p>
            <div style={{ height: '70%' }}></div>
            <p>Total Workout Completed: 16</p>
        </div>
    )
}

export default PersonalTotals
