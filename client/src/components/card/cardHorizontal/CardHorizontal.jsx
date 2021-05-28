import React from "react";
import "./cardHorizontal.css";
import imagen1 from "../../../images/imagen1.jpeg"

const CardHorizontal = ()=>{
    return (
        <div className="cardHorizontalContainer">
            <img src={imagen1} alt="" />
            <h1>THE NUTCRACKER AND THE FOUR REALMS</h1>
        </div>
    )
}

export default CardHorizontal;