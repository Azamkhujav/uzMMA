import './about_slider.scss'
import Slider from '../../../componants/Sliders/Sliders'
const AboutSlider = () => {
    return ( 
        <>
            <div className="about_slider_top">
                <div className="about_slider_top_left">
                    <h6 className="about_slider_top_left_title">
                        Партнеры
                    </h6>
                </div>
                <div className="about_slider_top_right">
                    <div className="about_slider_btn_block">
                        <button className="about_slider_top_right_btn about_slider_top_right_btn_left"></button>
                    <button className="about_slider_top_right_btn about_slider_top_right_btn_right"></button>
                    </div>
                </div>
            </div>
            <div className="about_slider_bottom">
                <div className="about_slider_bottom_item">
                   <Slider/>
                </div>
            </div>
        </>
     );
}
 
export default AboutSlider;