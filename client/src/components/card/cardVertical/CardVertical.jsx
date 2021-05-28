import React from "react";
import "./CardVertical.css";

const CardVertical = ({image})=>{
    return (
        <div className="cardVerticalContainer">
            <img src={image} alt="" />
        </div>
    )
}

export default CardVertical;