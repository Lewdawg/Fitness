import './personalInfo.css'

import PersonalInfoTop from './top/personalInfoTop.jsx'
import PersonalInfoBot from './bottom/personalInfoBot.jsx'

function PersonalInfo() {



    return (

        <div className="ppInfo" style={{ width: '38%', height: '95%' }}>

            <PersonalInfoTop />

            <PersonalInfoBot />

        </div>
    )
}

export default PersonalInfo
