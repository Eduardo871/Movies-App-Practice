import React from "react";
import "./CardDetail.css";
import imagen1 from "../../images/imagen1.jpeg"

const CardDetail = () =>{
    return (
        <div className="cardDetailContainer">
            <div className="img"><img src={imagen1} alt="" /></div>
            <div className="icon"></div>
            <div className="text"></div>
            <div className="footer"></div>
        </div>
    )
}
export default CardDetail;