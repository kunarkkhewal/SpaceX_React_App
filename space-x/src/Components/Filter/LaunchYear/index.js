import React, {useContext} from 'react';
import axios from 'axios'
import {DataContext} from './../../../App';
import './../index.css'

const LaunchYear = () => {
    let start = 2006;
    let end = new Date().getFullYear();
    let years = []
    for(let i=start; i<=end; i++ ){
        years.push(i);
    }
    const dataContext = useContext(DataContext);

    const handleOnClick = async (event) => {
        const year = event.target.value;
        await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`)
            .then(data => {
                dataContext.setMissionData(data.data)
            })
            .catch(error => {
                console.log(" -------- NO DATA FOUND!!! => error => ", error)
            })
    }

    return(
        <div className="LaunchYear-div">
            <h2>Launch Year</h2>
            <div className="year-button-div">
                {years.map(year=>{return <button onClick={handleOnClick} value={year}>{year}</button>})}
            </div>
        </div>
    )
}

export default LaunchYear;