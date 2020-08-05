import React from 'react';
import './../index.css'

const LaunchYear = () => {
    let start = 2006;
    let end = new Date().getFullYear();
    let years = []
    for(let i=start; i<=end; i++ ){
        years.push(i);
    }

    return(
        <div className="LaunchYear-div">
            <h2>Launch Year</h2>
            <div className="year-button-div">
                {years.map(year=>{return <button>{year}</button>})}
            </div>
        </div>
    )
}

export default LaunchYear;