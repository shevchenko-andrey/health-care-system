import manWithGlassesImage from "../../assets/man-with-glasses.png";
import oldManImage from "../../assets/old-man.png";
import oldWoManImage from "../../assets/old-woman.png";
import "./Hero.scss";

export const Hero: React.FC = () => {
  return (
    <section className='hero-section'>
      <div className='container hero-section__container'>
        <div className='hero-section__left-wrapper'>
          <h1 className='hero-section__title'>Deliver more inclusive care.</h1>
          <p>Violet powers culturally competent care at scale.</p>
          <p className='hero-section__accent'>Power your team</p>
        </div>
        <div className='hero-section__right-wrapper'>
          <div className='hero-section__image--large'>
            <img src={oldWoManImage} alt='Old woman' />
          </div>
          <div className='hero-section__image--small'>
            <img src={manWithGlassesImage} alt='Man with glasses' />
          </div>
          <div className='hero-section__image--small'>
            <img src={oldManImage} alt='Old man' />
          </div>
        </div>
      </div>
    </section>
  );
};
