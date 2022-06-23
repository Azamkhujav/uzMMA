import "./about8.scss";

import Images from '../../../assets/icons/2022-06-17 12.54 1.png'

const AboutSection8 = () => {
  return (
    <div className="about_section8_block">
      <div className="container">
        <div className="about_section8">
          <div className="about_section8_left">
            <img src={Images} alt="" className="about_section8_img" />
          </div>
          <div className="about_section8_right">
            <p className="about_section8_description">
              Национальная медиа ассоциация Узбекистана выполняет роль новой
              платформы в пропаганде вобравшего в себя национальную идею нового
              Узбекистана — идею Третьего Ренессанса многовекового сложного
              исторического пути нашего народа, богатого наследия наших предков
              — джадидов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection8;
