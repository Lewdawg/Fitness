import React, { useState } from 'react';
import './stopwatch.css';

// https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b

const stopWatch = () => {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        // start button logic here
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        // Pause button logic here
    }

    const handleResume = () => {
        // Resume button logic here
    }

    const handleReset = () => {
        // Reset button logic here
    }

    return (
        <div className="app">
            <h3>React Stopwatch</h3>
            <div className='stopwatch-card'>
                <p>{timer}</p> {/* here we will show timer */}
                <div className='buttons'>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handlePause}>Pause</button>
                    <button onClick={handleResume}>Resume</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default stopWatch;
