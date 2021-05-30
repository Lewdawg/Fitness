import Button from 'react-bootstrap/Button'

import { useState } from 'react'

import './exercises.css';


function Exercises() {

    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)

    return (
        <div className="section">

            <div>SquatsSquatsSquatsSquats</div>
            <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
            <input type="number" disabled value={total} />

            <Button onClick={() => setTotal(+amount + +total)}>Add</Button>
        </div>
    )
}

export default Exercises
