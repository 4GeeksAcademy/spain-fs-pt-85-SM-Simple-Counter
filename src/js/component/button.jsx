import React from "react";


const Button = (props) => {
    return(
        <button id={props.id} type="button" className={props.className} onClick={props.onClick}>{props.buttonValue}</button>
    )
}


export default Button;