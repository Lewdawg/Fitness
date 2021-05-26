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
            <p>Calories Burnt: 2000{/* {userData.totalCal} */}</p>
            <div></div>
            <p>Total Workout Completed: 5000{/* {userData.completedWO} */}</p>
        </div>
    )
}

export default PersonalTotals
