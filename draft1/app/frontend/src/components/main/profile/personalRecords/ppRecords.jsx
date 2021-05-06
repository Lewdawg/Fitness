import './ppRecords.css'

import PersonalTotals from './personalTotals/personalTotals.jsx'
import PersonalBest from './personalBest/personalBest.jsx'


function PpRecords() {



    return (

        <div className='ppRecords' style={{ width: '58%', height: '95%' }}>

            <PersonalBest />

            <PersonalTotals />

        </div>

    )
}

export default PpRecords
