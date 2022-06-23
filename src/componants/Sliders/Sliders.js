import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Sliders.scss'
import {chanel} from '../../assets/array.js'
import ntv from '../../assets/icons/8tv_logo 1.png'

export default function Sliders() {
    return(
        <div className="slider">
            <h1 className="slider_title">Партнеры</h1>
        
            <OwlCarousel className='owl-theme carus' items={7} margin={185}  dots={false} loop  nav>
                {
                  chanel.map((item,key)=>
                       (
                        <div key={key} className='item '>
                            <img src={item.img} />
                        </div>
                       )
                   )
                }
            </OwlCarousel>
        </div>
    )
}