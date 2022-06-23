import React from "react";
import logo from '../../assets/icons/2022-06-17 12.54 1.png'
import facebook from '../../assets/icons/Facebook_white.png'
import instagram from '../../assets/icons/Instagram_white.png'
import phone from '../../assets/icons/Phone_white.png'
import telegram from '../../assets/icons/Telegram_white.png'
import search from '../../assets/icons/Group 273.png'
import flag from '../../assets/icons/RU.png'
import arrow from '../../assets/icons/arrow-left.png'
import group from '../../assets/icons/group button.png'
import youtube from '../../assets/icons/Youtube_white.png'
import './Header.scss'

export default function Header() {
    return(
        <div className="header">
            <img className="header_logo" src={logo} />
                <ul className="header_menu" >
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Документации</li>
                </ul>
            <div className="header_icons" >
                <img src={youtube} />
                <img src={telegram}/>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={phone}/>
                <img src={search}/>
            </div>
            <div className="header_languae">
                <h2 className="header_lang_main" > <img src={flag} /> Русский <img src={arrow}/></h2>
            </div>
            <img src={group}/>
        </div>
    )
    
}