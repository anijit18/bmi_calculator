import React from "react";

function Button () {

    return (
        <div style={ {display:"flex",flexDirection:"column",gap:"1rem"} }>
            <input type="button" value="Submit"/>
            <input type="button" value="Reload"/>
        </div>
    )
    
}

export default Button;