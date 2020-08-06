import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import {DataContext} from '../../App';
import './index.css'

const LaunchData = () => {
    const { missionData, setMissionData } = useContext(DataContext);

    const getLaunchData = async () => {
        await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`)
            .then(data => {
                setMissionData(data.data)
            })
            .catch(error => {
                console.log(" -------- NO DATA FOUND!!! => error => ", error)
            })
    }
    
    useEffect(() => {
        getLaunchData();
    },[])

    return(
        <div className='LaunchData-div'>
            {missionData && missionData.map((launch, key) => {
                const {
                    mission_name, 
                    launch_year, 
                    mission_id, 
                    launch_success, 
                    links:{mission_patch_small},
                    rocket: {first_stage: {cores}}
                } = launch
                const land_success = cores.length === 1 ? cores[0].land_success : cores[cores.length-1].land_success

                return <div className='mission-data-div'>
                        <img src={mission_patch_small} alt="user"/>
                        <h3>{mission_name}</h3>
                        <p><b>Mission Ids:</b></p>
                        <ul>{!!mission_id.length && mission_id.map(id=>{
                            return <li>{id}</li>
                        })}</ul>
                        <p><b>Launch Year:</b> {launch_year}</p>
                        <p><b>Successful Launch:</b> <span>{JSON.stringify(!!launch_success)}</span></p>
                        <p><b>Successful Landing:</b> <span>{JSON.stringify(!!land_success)}</span></p>
                    </div>
            })}
        </div>
    )
} 

export default LaunchData;