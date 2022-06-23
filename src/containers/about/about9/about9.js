import "./about9.scss";
import Images from '../../../assets/images/about9.png'

const AboutSection9 = () => {
  return (
    <div className="about_section3_block">
      <div className="container">
        <div className="about_section3 about_section9_block">
          <div className="about_section3_left">
            <img src={Images} alt="" className="about_section3_images" />
          </div>
          <div className="about_section3_right">
            <h2 className="about_section3_title title_formate">
              Абуталипов Абдуазиз Абдулазиз ўғли 
            </h2>
            <span className="about_section3_extra_text">
              Назначен первым заместителем генерального директора Национальной ассоциации СМИ Узбекистана.
            </span>
            <p className="about_section3_description description_formate">
              Абдуазиз Абуталипов родился <b>10 декабря 1995 года</b> в городе Ташкенте.
              <b>В 2018</b> году окончил факультет журналистики Национального университета Узбекистана (бакалавр).

              
            </p>
            <p className="about_section3_description description_formate">
             <b> В 2013-2022</b> годах А.Абуталипов занимал ряд должностей в журнале «Узбекистан матбуоти», Национальном университете Узбекистана, Секретариате Центральной избирательной комиссии Республики Узбекистан.
            </p>
            <p className="about_section3_description description_formate">
              До своего назначения Абуталипов работал старшим советником пресс-службы Секретариата Центральной избирательной комиссии Республики Узбекистан.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection9;
