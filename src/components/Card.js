import React from "react";
import Heading from './Heading';
import Weight from './Weight';
import Height from './Height';
import Button from './Button';
import Answer from "./Answer";
import { useState } from "react";
import './card.css';

function Card () {

    let [height, setHeight] = useState(0);
    

    function calHeiHandler(event) {
        setHeight(event.target.value);
        console.log(event.target.value);
    }

    const [weight, setWeight] = useState(0);

    function calWeiHandler (event) {
        setWeight(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="card">
            <Heading />
            <Weight weight={weight} calWeiHandler={calWeiHandler}/>
            <Height height={height} calHeiHandler={calHeiHandler}/>
            <br></br>
            <Button />
            <Answer height={height} weight={weight}/>
        </div>
    )
}

export default Card;