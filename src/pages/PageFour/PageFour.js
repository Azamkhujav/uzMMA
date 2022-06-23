import React from "react";
import './PageFour.scss';
import TitleImage from "../../componants/TitleImage/TitleImage";
import Sliders from "../../componants/Sliders/Sliders";

export default function PageFour(){
    return(
        <div>
            <div className="container">
                <TitleImage />
            </div>
            <Sliders />
        </div>
        
    )
}