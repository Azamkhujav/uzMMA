import React from "react";
import SliderHeader from "../../componants/SliderHeader";
import Sliders from "../../componants/Sliders";
import Contpart from "../../componants/Contpart/Contpart";
import './Home.scss'
export default function Home() {
    return(
        <div className="home" >
            <SliderHeader/>
            <Sliders/>
            <Contpart/>

        </div>
    )
    
}