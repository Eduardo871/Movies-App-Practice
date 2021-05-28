import React from "react";
import "./Nav.css";
import Search from "../search/Search";
import menuIcon from "../../images/menuIcon.png";
import netflixIcon from "../../images/netflixIcon.png"

const Nav = ()=>{
    return (
        <div className="navContainer">
            <div className="navMenuContent">
                <img src={menuIcon} alt="" />
            </div>
            <div className="netflixIcon">
                <img src={netflixIcon} alt="" />
            </div>
            <div></div>
            <Search/>
        </div>
    )
}

export default Nav;