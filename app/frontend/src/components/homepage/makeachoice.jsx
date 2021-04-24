import './homepage.styles.css';

import HighlightsTicker from './highlights-ticker/highlights-ticker.component.jsx';
import Card from '../card/card.component.jsx';
import { useState } from 'react'


function Makeachoice() {

    const [showBeginner, setShowBeginner] = useState(false)


    return (


        <div id="secondChoice" className="displayNone">
            <button id="beginner" type="button" className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg">Beginner</button>
            {showBeginner ? < newBeginnerComponent /> : null}
            <button id="inter" type="button" className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg">intermediate</button>

            <button id="hard" type="button" className="btn btn-primary mw-50 fs-4 m-5 p-5 btn-lg">Hard</button>
        </div>


    );
}

export default Makeachoice;
