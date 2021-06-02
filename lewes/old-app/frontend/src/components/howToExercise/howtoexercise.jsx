import './howtoexercise.css';



function Howtoexercise() {



    return (

        <>

            <div id="theExercise" style={{ width: '50%', height: '50%' }}>

                <h2>Exercise.title</h2>

                <div id="theExerciseDiv" style={{ width: '100%', height: '80%' }}>

                    <section id="exerciseDescription" style={{ width: '45%', height: '100%' }}>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere iusto dolores sed veritatis voluptates debitis sit rerum animi tempora quas officia eveniet, obcaecati cupiditate sequi!</h4>

                        <ol className="m-3">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ol>
                    </section>

                    <section id="exerciseVid" style={{ width: '45%', height: '100%' }}>
                        <h3>Video</h3>

                        {/* <a href="https://www.youtube.com/watch?v=Dy28eq2PjcM"></a> */}
                    </section>

                </div>

            </div>

        </>
    )
}

export default Howtoexercise
