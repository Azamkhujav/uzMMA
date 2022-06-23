import React from "react";
import './Documentation.scss';

export default function Documentation(){
    return(
        <div className="container">
            <div className="blockForDocumentation">
                <h1 className="textDocumentation">Документации</h1>
                <p className="textForDocumentation"><a href="#" className="textForDocumentation2">ЗАКОН РЕСПУБЛИКИ УЗБЕКИСТАН «О СРЕДСТВАХ МАССОВОЙ ИНФОРМАЦИИ»</a></p>
                <p className="textForDocumentation"><a href="#" className="textForDocumentation2">ЗАКОН РЕСПУБЛИКИ УЗБЕКИСТАН «О ЗАЩИТЕ ПРОФЕССИОНАЛЬНОЙ ДЕЯТЕЛЬНОСТИ ЖУРНАЛИСТА»</a></p>
                <p className="textForDocumentation"><a href="#" className="textForDocumentation2">ЗАКОН РЕСПУБЛИКИ УЗБЕКИСТАН «ОБ ИНФОРМАТИЗАЦИИ»</a></p>
                <p className="textForDocumentation3"><a href="#" className="textForDocumentation2">ЗАКОН РЕСПУБЛИКИ УЗБЕКИСТАН «ОБ ОТКРЫТОСТИ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ И УПРАВЛЕНИЯ»</a></p>
            </div>
        </div>
    )
}