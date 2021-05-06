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

    <div className='watchDiv' style={{ width: '45%', height: '88%' }}>

      <div>

        <label style={{ fontSize: '4rem', display: 'block' }}>{timer} ms </label>

        <Button variant="primary" className="m-4 p-3" size='lg' onClick={handleRunClick} >{running ? 'Stop' : 'Start'}</Button>

        <Button variant="light" className="m-4 p-3" size='lg' onClick={handleClearClick} >Clear</Button>
      </div>

      <div>
        <Button variant="danger" size="lg" block className="m-2 width-50">Finish Workout</Button>
      </div>

      <div className="stopWatchSplit"></div>

      <div>
        <h1>Best Time</h1>
        <input type="number" disabled />
      </div>

    </div>

  )
}

export default Stopwatch;