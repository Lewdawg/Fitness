import SearchBar from "./searchBar/searchbar";


function ExerciseTab() {



    return (

        <div>

            <div id="exerciseSearchBar">
                <h2>Exercise.title</h2>
                <SearchBar />
            </div>

            <div id="exercises" style={{ width: '100%', height: '80%' }}>

            </div>

        </div>
    )
}

export default ExerciseTab
