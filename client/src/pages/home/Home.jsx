import React from "react";
import "./Home.css";
import Nav from "../../components/nav/Nav"
import CardHorizontal from "../../components/card/cardHorizontal/CardHorizontal";
import Slider from "../../components/slider/Slider";
import ButtonCategory from "../../components/buttonCategory/ButtonCategory";

const Home = ()=>{
  
    return (
        <div className="homeContainer">
            <Nav/>
            <Slider array={[<CardHorizontal/>,<CardHorizontal/>,<CardHorizontal/>]}/>
            <Slider array={[<ButtonCategory text="discover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>,<ButtonCategory text="discover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>,<ButtonCategory text="discover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>,<ButtonCategory text="discover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>]} />
        </div>
    )
}

export default Home;
