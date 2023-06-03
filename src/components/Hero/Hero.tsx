import manWithGlassesImage from "../../assets/man-with-glasses.png";
import oldManImage from "../../assets/old-man.png";
import oldWomanImage from "../../assets/old-woman.png";
import { Button } from "../Button";
import { Section } from "../Section";
import { Title } from "../Title";
import "./Hero.scss";

export const Hero: React.FC = () => {
  return (
    <Section bg='white'>
      <div className='hero-section'>
        <div className='hero-section__left-wrapper'>
          <Title as='h1'>Deliver more inclusive care.</Title>
          <p>Violet powers culturally competent care at scale.</p>
          <Button
            onClick={() => {
              throw new Error("Function not implemented.");
            }}
          >
            Power your team
          </Button>
        </div>
        <div className='hero-section__right-wrapper'>
          <div className='hero-section__image--large'>
            <img src={oldWomanImage} alt='Old woman' />
          </div>
          <div className='hero-section__image--small'>
            <img src={manWithGlassesImage} alt='Man with glasses' />
          </div>
          <div className='hero-section__image--small'>
            <img src={oldManImage} alt='Old man' />
          </div>
        </div>
      </div>
    </Section>
  );
};
