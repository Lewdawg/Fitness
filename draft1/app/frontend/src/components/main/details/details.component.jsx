import Button from 'react-bootstrap/Button'

import './details.styles.css';
import { useState } from 'react';

import Counter from './roundCounter/roundcounter.jsx';
import StopWatch from './stopwatch/stopwatch.jsx';
import Exercises from './exercises/exercises.jsx';


function Details() {

    return (

        <div id="mainBigDiv" className="fadeInDown">
            <h1>Card.Title</h1>

            <section id="cardLayout">

                <StopWatch />

                <div id="theWorkout" >

                    <Exercises />
                    <Exercises />
                    <Exercises />
                    <Exercises />
                    <Exercises />

                    <Exercises />
                    <Exercises />
                    <Exercises />
                    <Exercises />
                    <Exercises />
                </div>
                <Counter />
            </section>
        </div>
    )
}

export default Details

