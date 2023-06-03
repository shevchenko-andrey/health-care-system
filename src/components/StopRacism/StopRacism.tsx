import girlImage from "../../assets/girl.png";

import "./StopRacism.scss";

export const StopRacism: React.FC = () => {
  return (
    <section className='issues-section'>
      <div className='container'>
        <div className='issues-section__top'>
          <div className='issues-section__container'>
            <p className='issues-section__text'>
              Subscribe to Violet’s newsletter and receive our inclusive
              language and communication guide.
            </p>

            <p className='issues-section__text'>
              How to increase patient retention.
            </p>

            <button className='issues-section__text'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='container '>
        <div className='issues-section__bottom'>
          <div className='issues-section__content-wrapper'>
            <p className='issues-section__ascent'>The NEED</p>
            <h2 className='issues-section__title'>
              The health system isn't equitable for diverse patients.
            </h2>
            <p className='issues-section__text-bottom'>
              Medical racism. Severe distrust in medical providers.
              Misdiagnoses. Lack of access to coverage. These are just a few
              barriers culturally diverse patients face. We believe every human
              deserves equitable health care. That's why we built Violet.
            </p>
          </div>
          <div className='issues-section__image'>
            <img src={girlImage} alt='Girl' />
          </div>
        </div>
      </div>
    </section>
  );
};
