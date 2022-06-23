import "./about10.scss";
import Images from '../../../assets/images/about10.png'

const AboutSection10 = () => {
  return (
    <div className="about_section3_block">
      <div className="container">
        <div className="about_section3 about_section3_none">
          <div className="about_section3_left">
            <img src={Images} alt="" className="about_section3_images" />
          </div>
          <div className="about_section3_right">
            <h2 className="about_section3_title title_formate">
              Пўлатов Аброр Масутович
            </h2>
            <span className="about_section3_extra_text">
              Назначен заместителем председателя правления Национальной ассоциации СМИ Узбекистана – генеральным директором.
            </span>
            <p className="about_section3_description description_formate">
              Аброр Пулатов родился <b>12 февраля 1986</b> года в Ферганской области. <b>В 2006 году</b> окончил юридический факультет Ташкентского исламского университета, в 2008 году окончил Высшие курсы журналистики Национального университета Узбекистана

             
            </p>
            <p className="about_section3_description description_formate">
              <b>С 2007 по 2019 годы</b> Пулатов А. работал пресс-секретарем Департамента транспорта и внутренних дел МВД Республики Узбекистан, Центрального совета Молодежного общественного движения «Камолот», директором частного предприятия «Авторадио». СМИ, Комитет по делам религий при Кабинете Министров.
            </p>
            <p className="about_section3_description description_formate">
              До назначения А. Пулатов был заведующим отделом информационных технологий и информационной безопасности Исполкома Центрального совета Узбекской демократической партии.
            </p>
          </div>
        </div>


        <div className="about_section3_tablet_block">
        <div className="about_section3">
          <div className="about_section3_left">
            <img src={Images} alt="" className="about_section3_images" />
          </div>
          <div className="about_section3_right">
            <h2 className="about_section3_title title_formate">
              Пўлатов Аброр Масутович
            </h2>
            <span className="about_section3_extra_text">
              Назначен заместителем председателя правления Национальной ассоциации СМИ Узбекистана – генеральным директором.
            </span>
            <p className="about_section3_description description_formate">
              Аброр Пулатов родился <b>12 февраля 1986</b> года в Ферганской области. <b>В 2006 году</b> окончил юридический факультет Ташкентского исламского университета, в 2008 году окончил Высшие курсы журналистики Национального университета Узбекистана
            </p>
          </div>
        </div>
         <p className="about_section3_description description_formate">
              <b>С 2007 по 2019 годы</b> Пулатов А. работал пресс-секретарем Департамента транспорта и внутренних дел МВД Республики Узбекистан, Центрального совета Молодежного общественного движения «Камолот», директором частного предприятия «Авторадио». СМИ, Комитет по делам религий при Кабинете Министров.
            </p>
         <p className="about_section3_description description_formate">
              До назначения А. Пулатов был заведующим отделом информационных технологий и информационной безопасности Исполкома Центрального совета Узбекской демократической партии.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection10;
