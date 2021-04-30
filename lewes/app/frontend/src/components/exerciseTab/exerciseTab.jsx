import './exerciseTab.css';

import ExerciseTabCard from './exerciseTabCard/exerciseTabCard.jsx';

function ExerciseTab() {



    return (

        <>

            <div className="theExerciseTab" style={{ width: '100%', height: '100%' }}>

                <h2>Exercise.title</h2>

                <div className="theExerciseTabCollection" style={{ width: '97%', height: '30%' }}>

                    <ExerciseTabCard />
                    <ExerciseTabCard />
                    <ExerciseTabCard />
                    <ExerciseTabCard />
                    <ExerciseTabCard />
                    <ExerciseTabCard />

                    <ExerciseTabCard />
                    <ExerciseTabCard />
                    <ExerciseTabCard />
                    {/* <ExerciseTabCard />
                    <ExerciseTabCard />
                    <ExerciseTabCard /> */}

                </div>

            </div>

        </>
    )
}

export default ExerciseTab
