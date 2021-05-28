import React from "react";
import "./ButtonCategory.css";

const ButtonCategory = ({image,text})=>{
    return(
        <div className="buttonCateoryContainer">
            <img src={image} alt="" />
            <h1>{text}</h1>
            <div className="color"></div>
        </div>
    )
}

export default ButtonCategory;