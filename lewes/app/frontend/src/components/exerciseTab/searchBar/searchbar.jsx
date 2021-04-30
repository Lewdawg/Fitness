import React from 'react'

function SearchBar({ keyword, setKeyword }) {

    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" }

    return (

        <>
            <h3>Search</h3>

            <input
                style={BarStyling}
                key="test1"
                value={keyword}
                placeholder={"Search Country"}
                onChange={(e) => setKeyword(e.target.value)}
            />

        </>
    )
}

export default SearchBar
