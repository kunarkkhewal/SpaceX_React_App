import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css'

const LaunchData = () => {
    const [launchData, setLaunchData] = useState([])

    const getLaunchData = async () => {
        await axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(data => {
            setLaunchData(data.data);
        })
        .catch(error => {
            console.log(" -------- NO DATA!!! => error => ", error)
        })
    }
    
    useEffect(() => {
        getLaunchData();
    })

    return(
        <div className='LaunchData-div'>
            {launchData.map((launch, key) => {
                const {
                    mission_name, 
                    launch_year, 
                    mission_id, 
                    launch_success, 
                    links:{mission_patch, mission_patch_small}
                } = launch
                return <div className='mission-data-div'>
                        <img src={mission_patch_small} alt="user"/>
                        <h3>{mission_name}</h3>
                        <p>Mission Ids:</p>
                        <ul>{!!mission_id.length && mission_id.map(id=>{
                            return <li>{id}</li>
                        })}</ul>
                        <p>Launch Year: {launch_year}</p>
                        <p>Successful Launch: {launch_success}</p>
                    </div>
            })}
        </div>
    )
} 

export default LaunchData;