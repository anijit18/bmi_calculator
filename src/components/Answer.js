import React from "react";

function Answer (props) {

    const ans = props.height + props.weight ;

    return (
        <div>
            <span>Your BMI is: </span>
            <span>{ans}</span>
            <br></br>
            <span>You are: </span>
            <span>let's see</span>
        </div>
    )
}

export default Answer;