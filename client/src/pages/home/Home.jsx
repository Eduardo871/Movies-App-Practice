import React from "react";
import "./Home.css";
import Nav from "../../components/nav/Nav"
import CardHorizontal from "../../components/card/cardHorizontal/CardHorizontal";
import Slider from "../../components/slider/Slider";
import ButtonCategory from "../../components/buttonCategory/ButtonCategory";
import CardVertical from "../../components/card/cardVertical/CardVertical";

const Home = ()=>{
  
    return (
        <div className="homeContainer">
            <Nav/>
            <Slider array={[<CardHorizontal/>,<CardHorizontal/>,<CardHorizontal/>]}/>
            <Slider array={[<ButtonCategory text="DISCOVER" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>,<ButtonCategory text="CATEGORIES" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>,<ButtonCategory text="discover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>,<ButtonCategory text="discover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejnStckTuL6B0vlfvVpeaLAOIysDLKYtMng&usqp=CAU"/>]} />
            <Slider array={[<CardVertical image={"https://es.web.img3.acsta.net/c_310_420/pictures/19/10/09/14/38/1936798.jpg"}/> , <CardVertical image={"https://us.hola.com/imagenes/actualidad/20190220137744/you-novedades-segunda-temporada-gt/0-650-188/portada-you-a.jpg"}/>, <CardVertical image={"https://static.wikia.nocookie.net/arrow/images/c/c0/Flash_S7_-_Official_Poster.png/revision/latest?cb=20210209210319&path-prefix=es"} /> ]}/>
        </div>
    )
}

export default Home;
