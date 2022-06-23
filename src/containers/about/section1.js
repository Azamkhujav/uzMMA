import './section1.scss'
import Images from '../../assets/images/aboutsection1.png'
import Shadov from '../../assets/images/aboutsection1_red.png'
import Background from '../../assets/images/aboutsection1_background.png'

const AboutSection1 = () => {
    return ( 
       <div className="about_section1_block">
         <div className="container">
        <div className='about_section_1'>
            <div className="about_section_1_left">
                <h1 className="about_section_1_title">НАЦИОНАЛЬНАЯ МЕДИА АССОЦИАЦИЯ УЗБЕКИСТАНА</h1>
                <img src={Shadov} alt="" className="about_section_1_shadov" />
                <p className="about_section_1_description">
                    Национальная медиа ассоциация Узбекистана является крупнейшей негосударственной некоммерческой медиа организацией в стране, охватывающей негосударственные телерадиоканалы, студии кабельного телевидения и интернет-телевидение
                </p>
                <a href="javascript:void(0)" className="about_section_1_link">
                    Связаться
                </a>
            </div>
            <div className="about_section_1_right">
                <img src={Images} alt="" className="about_section_1_images" />
                {/* <img src={Background} alt="" className="about_section_1_images_background" /> */}
            </div>
        </div>
            
        </div>
       </div>
     );
}
 
export default AboutSection1;