import ontrakImage from "../../assets/ontrak.png";
import pivotalImage from "../../assets/pivotal.png";
import { Section } from "../Section";
import "./Organizations.scss";

export const Organizations: React.FC = () => {
  return (
    <Section bg='secondary'>
      <div className='organizations-section'>
        <p className='organizations-section__description'>
          Powering inclusive care for the industry's leading organizations.
        </p>
        <ul className='organizations-section__list'>
          <li className='organizations-section__item'>
            <img
              className='organizations-section__img'
              src={ontrakImage}
              alt='Ontrack'
            />
          </li>
          <li className='organizations-section__item'>
            <img
              className='organizations-section__img'
              src={ontrakImage}
              alt=''
            />
          </li>
          <li className='organizations-section__item'>
            <img
              className='organizations-section__img'
              src={pivotalImage}
              alt=''
            />
          </li>
          <li className='organizations-section__item'>
            <img
              className='organizations-section__img'
              src={pivotalImage}
              alt=''
            />
          </li>
        </ul>
      </div>
    </Section>
  );
};
