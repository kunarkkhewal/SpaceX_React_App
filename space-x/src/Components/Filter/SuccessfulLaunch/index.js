import React from 'react';
import BooleanButton from './../BooleanButton';
import './../index.css'

const SuccessfulLaunch = () => {
    return(
        <div className="SuccessfulLanding-div">
            <h2>Successful Launch</h2>
            {<BooleanButton/>}
        </div>
    )
}

export default SuccessfulLaunch;