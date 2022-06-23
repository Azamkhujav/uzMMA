import React from "react";
import device from '../../assets/images/Device.png'
import './Contpart.scss'
export default function Contpart() {
    return(
        <div className="Contpart">
            <div className="text_part" >
                <h1 className="text_part_title" >Состоится очередное заседание Конституционной комиссии</h1>
                <p className="text_part_text" >17 июня 2022 года в 10:00 состоится очередное заседание Конституционной комиссии по формированию предложений и дополнений в Конституцию Республики Узбекистан и усилению организационных мероприятий.</p>
            </div>
            <div className="image_part" >
                <img className="image_part_img" src={device} />
            </div>
        </div>
    )
    
}