import React, { useState } from "react";
import './weight.css'
function Weight (props) {

    return (

        <div className="weight">
            {/* <h6>Weight (kg)</h6> */}
            <label htmlFor="w">Weight (kg)</label>
            <br></br>
            <input type="text" id="w" value={props.weight} onChange={props.calWeiHandler}/>
        </div>
    )
    
}
// 
export default Weight;