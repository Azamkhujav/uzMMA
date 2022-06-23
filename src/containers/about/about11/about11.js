import AboutImages11 from '../../../componants/about_images/about_images';
import Photo1 from '../../../assets/images/photo1.png'
import Photo2 from '../../../assets/images/photo2.png'
import Photo3 from '../../../assets/images/photo3.png'
import Photo4 from '../../../assets/images/photo4.png'
import './about11.scss'
const About11 = () => {
    return ( 
        <div className='about11_section_block'>
            <div className="container">
                <div className="about11_section_block_inner">
                    <h6 className="about11_section_title">
                        Галерея
                    </h6>
                    <div className="about11_section_block_inner_wrapper">
                        <AboutImages11
                            title={'1'}
                            images={Photo1}
                        />
                        <AboutImages11
                            title={'2'}
                            images={Photo2}
                        />
                        <AboutImages11
                            title={'3'}
                            images={Photo3}
                        />
                        <AboutImages11
                            title={'4'}
                            images={Photo4}
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About11;