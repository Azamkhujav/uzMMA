import './about.scss'
import AboutSection1 from '../../containers/about';
import AboutSection2 from '../../containers/about/about2/about2';
import AboutSection3 from '../../containers/about/about3/about3';
import AboutSection4 from '../../containers/about/about4/about4';
import AboutSection5 from '../../containers/about/about5/about5';
import AboutSection6 from '../../containers/about/about6/about6';
import AboutSection7 from '../../containers/about/about7/about7';
import AboutSection8 from '../../containers/about/about8/about8';
import AboutSection9 from '../../containers/about/about9/about9';
import Sliders from '../../componants/Sliders/Sliders';
import AboutSection10 from '../../containers/about/about10';
import About11 from '../../containers/about/about11';

const About = () => {
    return ( 
        <>
            <AboutSection1/>
            <AboutSection2/>
            <AboutSection3/>
            <AboutSection4/>
            <AboutSection5/>
            <AboutSection6 />
            <AboutSection7 />
            <AboutSection8 />
            <AboutSection9 />
            <Sliders />
            <AboutSection10/>
            <About11/>
        </>
     );
}
 
export default About;