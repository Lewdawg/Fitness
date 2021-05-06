

function ExerciseTabCard() {



    return (

        <div className="theExerciseTabCard" style={{ width: '45%', height: '100%' }}>

            <h2>Squat</h2>

            <div className="exerciseCardLayout" >

                <section className="exerciseDescription" style={{ width: '48%', height: '90%' }}>

                    <ol className="">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ol>
                </section>

                <section className="exerciseVid" style={{ width: '48%', height: '90%' }}>
                    <h3>Video</h3>
                    <h3>Video</h3>
                    <h3>Video</h3>

                    {/* <a href="https://www.youtube.com/watch?v=Dy28eq2PjcM"></a> */}
                </section>

            </div>

        </div>
    )
}

export default ExerciseTabCard
