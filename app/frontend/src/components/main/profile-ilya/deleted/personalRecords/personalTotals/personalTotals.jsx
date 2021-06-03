import './personalTotals.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

function PersonalTotals() {

    const [userData, setUserData] = useState({})

    useEffect(() =>
        axios(
            "/api/user"
        )
            .then(setUserData)
    )

    return (
        <div className="personalTotals fadeIn second">
            <p>Calories Burnt: {userData.totalCal}</p>
            <div style={{ height: '70%' }}></div>
            <p>Total Workout Completed: {userData.completedWO}</p>
        </div>
    )
}

export default PersonalTotals
