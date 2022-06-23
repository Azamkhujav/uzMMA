import "./about5.scss";
import Images from '../../../assets/icons/about5.png'

const AboutSection5 = () => {
  return (
    <div className="about_section3_block">
      <div className="container">
        <div className="about_section3 about_section5_block">
          <div className="about_section3_left">
            <img src={Images} alt="" className="about_section3_images" />
          </div>
          <div className="about_section3_right">
            <h2 className="about_section3_title title_formate">
              Ахмедов Улуғбек Рахматович
            </h2>
            <span className="about_section3_extra_text">
              Назначен заместителем генерального директора по общим вопросам Национальной ассоциации СМИ Узбекистана.
            </span>
            <p className="about_section3_description description_formate">
              Улугбек Ахмедов родился <b>11 августа 1972 года</b> в Самаркандской области. <b>В 1996 году</b> окончил Самаркандский государственный университет.
            </p>
            <p className="about_section3_description description_formate">
              У.Ахмедов 1991-2022 Самаркандский государственный университет,
            </p>
            <ul className="about_section3_description_ul">
              <li className="about_section3_description_li">ООО «САМАРКАНД-СТВ»,</li>
              <li className="about_section3_description_li">СТВ СМИ ХК,</li>
              <li className="about_section3_description_li">ООО «МАСТЕР МЕДИА ПРОДАКШН ЭНД БРАДКАСТ»,</li>
            </ul>
            <p className="about_section3_description description_formate">
              До своего назначения У.Ахмедов занимал должность заместителя генерального директора по общим вопросам УзАСИ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection5;
