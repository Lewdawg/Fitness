import Button from 'react-bootstrap/Button'

import './details.styles.css';
import { useState } from 'react';

import Counter from './roundCounter/roundcounter.jsx';
import StopWatch from './stopwatch/stopwatch.jsx';
import ExeDetails from './workoutSide/exedetails.jsx';


function Details() {

    return (

        <div id="mainBigDiv" className="fadeInDown">
            <h1>Card.Title</h1>

            <section id="cardLayout">

                <StopWatch />

                <div id="theWorkout" >
                    {/* <div className="section section-headers">
                        <div>Exercise</div>
                        <div>Amount</div>
                        <div>Total</div>
                        <div>Add</div>
                    </div> */}

                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />

                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                </div>

                <Counter />

                {/* <div id="theTimer">*/}

                {/* </div> */}
            </section>
        </div>
    )
}

export default Details

