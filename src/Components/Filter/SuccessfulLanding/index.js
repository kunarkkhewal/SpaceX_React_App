import React from 'react';
import BooleanButton from './../BooleanButton';
import './../index.css'

const SuccessfulLanding = () => {
    return(
        <div className="SuccessfulLanding-div">
            <h2>Successful Landing</h2>
            {<BooleanButton value='land_success'/>}
        </div>
    )
}

export default SuccessfulLanding;