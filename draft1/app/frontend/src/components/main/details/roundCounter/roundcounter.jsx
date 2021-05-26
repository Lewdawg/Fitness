import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import CalAndDuration from './calAndDuration/calanddur'

import './roundcounter.css'


function Counter() {

    const [count, setCount] = useState(5)

    return (
        <div id="roundAndInfo">

            <div className="mainCounter">

                <h3 className='roundsRemaining'>Rounds Remaining</h3>

                <h2 className='count'>{count}</h2>

                {/* <Button variant="success" className="m-1" size='lg' onClick={() => setCount(count + 1)}>+1</Button> */}
                <Button variant="danger" className="m-1" onClick={() => setCount(count - 1)}>Round Completed</Button>

            </div>

            <CalAndDuration />
        </div>
    )
}

export default Counter
