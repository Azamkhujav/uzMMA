import React from "react";
import './SliderHeader.scss'
import slide from '../../assets/icons/1 слайд.png'
export default function SliderHeader() {
    return(
        <div className="slider_haeder">
            <img src={slide} />
        </div>
    )
    
}