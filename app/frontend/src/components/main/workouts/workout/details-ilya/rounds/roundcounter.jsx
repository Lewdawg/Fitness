import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Calanddur from './calAndDur/calanddur'

import './roundcounter.css'


function Counter() {

    const [count, setCount] = useState(5)


    return (

        <>
            <div id="roundNinfo">
                <div className="mainCounter">
                    <h3 className='roundsRemaining'>Rounds Remaining</h3>
                    <h2 className='count'>{count}</h2>
                    <div className="buttonDiv">
                        {/* <Button variant="success" className="m-1" size='lg' onClick={() => setCount(count + 1)}>+1</Button> */}
                        <Button variant="danger" className="m-3" size='lg' onClick={() => setCount(count - 1)}>Round Completed</Button>
                    </div>
                </div>

                <Calanddur />

            </div>
        </>
    )
}

export default Counter
