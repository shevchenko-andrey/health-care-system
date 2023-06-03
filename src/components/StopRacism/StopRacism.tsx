import girlImage from "../../assets/girl.png";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";
import { Title } from "../Title";

import "./StopRacism.scss";

export const StopRacism: React.FC = () => {
  return (
    <Section>
      <div className='issues-section__top'>
        <div className='issues-section__container'>
          <p className='issues-section__text'>
            Subscribe to Violet’s newsletter and receive our inclusive language
            and communication guide.
          </p>

          <p className='issues-section__text'>
            How to increase patient retention.
          </p>

          <button className='issues-section__text'>Subscribe</button>
        </div>
      </div>

      <div className='issues-section__bottom'>
        <div className='issues-section__content-wrapper'>
          <SectionHeading color='secondary'>The NEED</SectionHeading>

          <Title color='secondary'>
            The health system isn't equitable for diverse patients.
          </Title>

          <p className='issues-section__text-bottom'>
            Medical racism. Severe distrust in medical providers. Misdiagnoses.
            Lack of access to coverage. These are just a few barriers culturally
            diverse patients face. We believe every human deserves equitable
            health care. That's why we built Violet.
          </p>
        </div>
        <div className='issues-section__image'>
          <img src={girlImage} alt='Girl' />
        </div>
      </div>
    </Section>
  );
};
