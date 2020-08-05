import React from 'react';
import LaunchYear from './LaunchYear';
import SuccessfulLaunch from './SuccessfulLaunch';
import SuccessfulLanding from './SuccessfulLanding';
import './index.css'

const Filter = () => {
    return(
        <div className='Filter-div'>
            <h1>Filters</h1>
            {<LaunchYear/>}
            {<SuccessfulLaunch/>}
            {<SuccessfulLanding/>}
        </div>
    )
} 

export default Filter;