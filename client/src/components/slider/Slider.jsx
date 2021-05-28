import React from "react";
import "./Slider.css";

const Slider = ({array})=>{
    return (
        <div className="sliderContainer">
            {
                array.map(content => content)
            }
        </div>
    )
}
export  default Slider;