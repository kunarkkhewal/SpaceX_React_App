import React, {useContext} from 'react';
import axios from 'axios'
import {DataContext} from './../../../App';

const BooleanButton = props => {
    const dataContext = useContext(DataContext);

    const handleOnClick = async (event) => {
        const value = event.target.value;
        await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&${props.value}=${value}`)
            .then(data => {
                dataContext.setMissionData(data.data)
            })
            .catch(error => {
                console.log(" -------- NO DATA FOUND!!! => error => ", error)
            })
    }

    return(
        <div className="boolean-button-div">
            <button value='true' onClick={handleOnClick}>TRUE</button>
            <button value='false' onClick={handleOnClick}>FALSE</button>
        </div>
    )
}

export default BooleanButton;