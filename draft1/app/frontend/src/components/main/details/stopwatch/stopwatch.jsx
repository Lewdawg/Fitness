import Button from 'react-bootstrap/Button'
import { useReducer, useRef, useEffect } from 'react';

import './stopwatch.css';

function reducer(currentState, newState) {
  return { ...currentState, ...newState }
}

function Stopwatch() {

  const [{ running, timer }, setState] = useReducer(reducer, {

    running: false,
    timer: 0,
  })


  const intervalRef = useRef(null)

  useEffect(() => {
    return () => clearInterval(intervalRef.current)

  }, [])

  function handleRunClick() {

    if (running) {

      clearInterval(intervalRef.current)

    } else {

      const startTime = Date.now() - timer
      intervalRef.current = setInterval(() => {

        setState({ timer: Date.now() - startTime })

      }, 0)
    }
    setState({ running: !running })
  }


  function handleClearClick() {

    clearInterval(intervalRef.current)
    setState({ timer: 0, running: false })
  }

  return (

    <div className='watchDiv'>

      <div>

        <label style={{ fontSize: '3rem', display: 'block' }}>{timer} ms </label>

        <Button variant="primary" className="timeButt" size='lg' onClick={handleRunClick} >{running ? 'Stop' : 'Start'}</Button>

        <Button variant="light" className="timeButt" size='lg' onClick={handleClearClick} >Clear</Button>
      </div>

      <div>
        <Button variant="danger" className="timeButt" size='lg'>Finish Workout</Button>
      </div>

      <div className="stopWatchSplit"></div>

      <div className="record">
        <h1>Best Time</h1>
        <input type="number" disabled />
      </div>

    </div>

  )
}

export default Stopwatch;