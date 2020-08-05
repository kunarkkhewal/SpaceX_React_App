import React from 'react';
import BooleanButton from './../BooleanButton';
import './../index.css'

const SuccessfulLaunch = () => {
    return(
        <div className="SuccessfulLanding-div">
            <h2>Successful Launch</h2>
            {<BooleanButton value='launch_success'/>}
        </div>
    )
}

export default SuccessfulLaunch;