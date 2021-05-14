import Button from 'react-bootstrap/Button'

import './exedetails.css';


function exedetails() {

    return (

        <>
            <div className="section">

                <div>Squats</div>
                <input type="number" style={{ width: '20%' }} />
                <input type="text" disabled style={{ width: '20%' }} />

                <Button>Add</Button>

            </div>

        </>
    )
}

export default exedetails
