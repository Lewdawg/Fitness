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

  const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (

    <div className='watchDiv'>

      <div>
        <label>{formatTime(timer)} </label>

        <Button variant="primary" className="timeButt" onClick={handleRunClick} >{running ? 'Stop' : 'Start'}</Button>

        <Button variant="warning" className="timeButt" onClick={handleClearClick} >Clear</Button>
        {/* </div>

      <div> */}
        <Button variant="success" className="timeButt" size='lg'>Finish Workout</Button>
      </div>
    </div>
  )
}

export default Stopwatch;