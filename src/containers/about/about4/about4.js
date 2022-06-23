import "./about4.scss";
import TitleBlock from "../../../componants/about4_text_block";

const AboutSection4 = () => {
  return (
    <div className="about_section4_block">
      <div className="container">
        <div className="about_section4">
          <div className="about_section4_inner">
            <TitleBlock
            title={'Центральные телеканалы: '}
            description={'“Sevimli-TV ”, “Zo‘r-TV” , “Mening yurtim” ,  “UzReport-TV”, “Renessans-TV”.'}
          />
          </div>
          <div className="about_section4_inner">
            <TitleBlock
            title={'Центральные радиостанции:'}
            description={`“Grand”, “O'zbegim taronasi”, “Avtoradio”, “Oriat - FM”, “Oriat dono”, “Vodiy sadosi”, “Navro'z-FM”, “Yoshlar ovozi”, “Maxima”, “Nostalgie”, “Poytaxt-Inform”, “Poytaxt”`}
          />
          </div>
          <div className="about_section4_inner">
            <TitleBlock
            title={'Региональные телеканалы:'}
            description={'ТРК “Taraqqiyot” ( Андижан) , “Ruxsor-TV”  (Фергана), “Gold uz” (Фергана), “Muloqot-TV” (Фергана), “Jizzax-TV” (Джизак), “Istiqlol-TV” (Бухара), “Nasaf-TV” (Кашкадарья), “Ishonch-TV” (Сурхандарья), “S-Iqbol-TV” (Хорезм), “Jaslar-TV” (Каракалпакстан), “To‘rtko’l-TV” (Каракалпакстан), “Ellikqal’a-TV” (Каракалпакстан), “Amudaryo-TV” (Каракалпакстан), “Sobir-Media” MChJ 8-TV (Хорезм), “Olmaliq OKMK” (Ташкентская область), “NTV” (Навои).'}
          />
          </div>
          <div className="about_section4_inner">
            <TitleBlock
            title={'Региональные радиостанции:'}
            description={'“Samarqand-inform”, “Ruxsor-FM”, “Nukus-FM”, “Nasaf-FM”, “Diydor-FM”, “Iqbol-FM”, “Muloqot-FM”'}
          />
          </div>
          <div className="about_section4_inner">
            <TitleBlock
            title={'Интернет-телеканалы:'}
            description={'“Dasturxon - TV”, “Biz - TV”'}
          />
          </div>
          <div className="about_section4_inner">
            <TitleBlock
            title={'Журнал:'}
            description={'“Siyosat”.'}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
