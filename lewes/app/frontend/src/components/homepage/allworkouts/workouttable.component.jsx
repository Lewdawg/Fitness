import './workouttable.styles.css';

function workouttable() {


    return (

        <>
            <table id="allTable" class="table table-striped table-hover bg-light displayNone table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Time</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Beginner</td>
                        <td>23min</td>
                        <td>Indoors</td>
                        <td>Morning Spring</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Beginner</td>
                        <td>16min 30sec</td>
                        <td>Indoors</td>
                        <td>Fat Burner</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Intermediate</td>
                        <td>21min</td>
                        <td>Indoors</td>
                        <td>Knee capper</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Hard</td>
                        <td>26min</td>
                        <td>Outdoors</td>
                        <td>Deep Breather</td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default workouttable
