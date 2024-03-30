import React from "react";

const Button = ({label}) =>{
    return(
        <div className="btnContainer">
            <button className="btn">{label}</button>
        </div>
    )
}

export default Button;