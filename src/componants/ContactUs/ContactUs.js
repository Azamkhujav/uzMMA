import React from "react";
import './ContactUs.scss';
import IconForContactUs from '../../assets/icons/2022-06-17 12.54 1.png';
 
export default function ContactUs(){
    return( 
            <div className="ContactUs ">
                <div className="container main" >
                    <div className="formPartContactUs">
                        <h1 className="textContactUs">Напишите нам</h1>
                        <div className="ContactUsForDisplay_wrapper">
                            <div>
                                <input type={'text'} placeholder="Имя"  className="inputContactUs"/>
                                <input type={'text'} placeholder="Фамилия"  className="inputContactUs1"/>
                            </div>

                            <input type={'email'} placeholder="Email"  className="inputContactUs2"/>
                            <textarea rows="5" cols="60" name="description" className="inputContactUs3" placeholder="Текст сообщения"></textarea>
                        </div>

                        <button className="ButtonForContactUs">Отправить</button>
                    </div>

                    <div className="textPartContactUs">
                        <img className="IconForContactUs" src={IconForContactUs} />
                        <div className="textPartContactUs1">
                            <p className="textContactUs1">ОZBEKISTON MILLIY MEDIA ASSOTSIATSIYASI</p>
                            <p className="textContactUs2"><span className="textContactUs1">Адрес:</span> Республика Узбекистан, город Ташкент площадь Х.Алимджана Бизнес комплекс <span className="textContactUs3">“Poytaxt”</span> Западная сторона <span className="textContactUs3">4-</span>й проход <span className="textContactUs3">2-</span>й этаж.</p>
                            <p className="textContactUs3"><span className="textContactUs1">Тел:</span> +998 71 237-28-30</p>
                            <p className="textContactUs3"><span className="textContactUs1">Email:</span> eoavma@umail.uz</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}