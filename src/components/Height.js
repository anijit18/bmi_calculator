import React, { useState } from "react";
import './height.css';


function Height(props) {
  

  return (
    <div className="height">
      <label htmlFor="h">Height (kg)</label>
      <br></br>
      <input type="text" id="h" value={props.height} onChange={props.calHeiHandler} />
    </div>
  )
 
}
// 
export default Height;
