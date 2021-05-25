import React from "react";
import "./Nav.css";
import Search from "../search/Search";
const Nav = ()=>{
    return (
        <div className="navContainer">
            <div className="navMenuContent"></div>
            <div className="navIcon"></div>
            <Search/>
        </div>
    )
}

export default Nav;