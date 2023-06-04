import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { Section } from "../Section";
import { Title } from "../Title";

import "./DeliveryTeam.scss";

export const DeliveryTeam = () => {
  return (
    <Section bg='gray'>
      <div className='delivery'>
        <Title>See how Violet can help your care delivery team.</Title>
        <div className='delivery__benefits'>
          <div className='delivery__adv first__benefit'>
            <h3 className='adv__heading'>
              I'm the CEO of a health care organization.
            </h3>
            <div className='adv__description'>
              I want my patients to know my org is committed to delivering
              inclusive care.
            </div>
            <Arrow className='adv__icon secondary' />
          </div>
          <div className='delivery__adv second__benefit'>
            <h3 className='adv__heading'>I'm a DEI strategy leader.</h3>
            <div className='adv__description'>
              I want to ensure my provider team is getting the best inclusivity
              training.
            </div>
            <Arrow className='adv__icon' />
          </div>
          <div className='delivery__adv third__benefit'>
            <h3 className='adv__heading'>
              I'm a provider engagement director.
            </h3>
            <div className='adv__description'>
              I want to engage and retain my providers with more benefits.
            </div>
            <Arrow className='adv__icon' />
          </div>
        </div>
      </div>
    </Section>
  );
};

