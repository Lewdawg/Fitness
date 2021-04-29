import Button from 'react-bootstrap/Button'

import './bigcard.styles.css';
import { useState } from 'react';

import Counter from './roundCounter/roundcounter.jsx';
import StopWatch from './stopwatch/stopwatch.jsx';
import ExeDetails from './workoutSide/exedetails.jsx';


function bigCard() {


    return (

        <div id="mainBigDiv" style={{ width: '85%', height: '85%' }}>

            <h1>Card Title</h1>

            <section id="cardLayout" style={{ width: '100%', height: '70%' }}>

                <div id="theWorkout" >
                    <div className="section section-headers" style={{ width: '98%', height: '10%' }}>
                        <div>Exercise</div>
                        <div>Amount</div>
                        <div>Total</div>
                        <div>-</div>
                    </div>

                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />
                    <ExeDetails />


                    {/* <div className="section">
                        <Button variant="danger" size="lg" block className="m-2 width-50">Finish Workout</Button>
                    </div> */}

                </div>


                <div id="theTimer" style={{ width: '45%', height: '100%' }}>
                    <Counter />
                    <StopWatch />
                </div>

            </section>

        </div>
    )
}

export default bigCard




{/* <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                            </InputGroup> */}

{/* 
                            <Button variant="outline-light" style={{ 'backgroundColor': 'red' }} onClick={roundCompleted}>1</Button>
                            <Button variant="outline-light" style={{ 'backgroundColor': 'red' }} onClick={roundCompleted}>2</Button>
                            <Button variant="outline-light" style={{ 'backgroundColor': 'red' }} onClick={roundCompleted}>3</Button> */}