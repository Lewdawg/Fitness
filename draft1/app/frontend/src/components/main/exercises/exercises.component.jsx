import './exercises.styles.css';

import ExerciseTabCard from './exerciseTabCard/exerciseTabCard.jsx';

function Exercises() {



    return (

        <>

            <div id="theExerciseTab" className="wrapper fadeInDown mt-1">

                <h1>Exercises</h1>

                <div className="theExerciseTabCollection" style={{}}>

                    <div className="formContent">
                        <ExerciseTabCard />
                    </div>
                    <div className="formContent">
                        <ExerciseTabCard />
                    </div>
                    <div className="formContent">
                        <ExerciseTabCard />
                    </div>
                    <div className="formContent">
                        <ExerciseTabCard />
                    </div>
                    <div className="formContent">
                        <ExerciseTabCard />
                    </div>
                    <div className="formContent">
                        <ExerciseTabCard />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Exercises;
