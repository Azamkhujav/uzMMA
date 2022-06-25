import React from "react";
import './TitleImage.scss';
import eye from '../../assets/icons/eye.png';
import directbox from '../../assets/icons/directbox-send.png';
import imagepart1 from '../../assets/images/imagepart1.png';
import imagepart2 from '../../assets/images/imagepart2.png';
import imagepart3 from '../../assets/images/imagepart3.png';

export default function TitleImage(){
    return(
        <div className="container">
            <div className="blockTitleImage">
                 <h1 className="textTitleImage">Кто такой журналист, блогер? Нас интересовало мнение блогеров, у которых тысячи подписчиков.</h1>
                 <div className="blockForTitleImage">
                    <p className="textTitleImage2">17 июня, 15:39</p>
                    <img className="imgTitleImage" src={eye} />
                    <p className="textTitleImage3">502</p>
                    <img className="imgTitleImage2" src={directbox} />
                    <p className="textTitleImage3">Поделиться</p>
                 </div>

                <div className="ImgPartTitleImage">
                    <div className="ImgPart1">
                        <img className="imgTitleImage3" src={imagepart1} />
                    </div>

                    <div className="ImgPart2">
                        <img className="imgTitleImage4" src={imagepart2} />
                        <img className="imgTitleImage5" src={imagepart3} />
                    </div>
                </div> 

                <p className="textTitleImage4">Кто такой журналист, блогер? Нас интересовало мнение блогеров, у которых тысячи подписчиков.</p>
                <p className="textTitleImage5"><b>Журналистика</b> — это профессия, а ведение блога — это деятельность. Есть требования, чтобы быть журналистом. Необходимо иметь глубокие знания, перо, речь, анализ и знать основы журналистики.</p>
            </div>

        </div>
    )
}