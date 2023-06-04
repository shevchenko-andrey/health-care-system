import Customer from "../../assets/man-on-the-chair.png";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";
import { Title } from "../Title";
import "./Competence.scss";

export const Competence = () => {
  return (
    <Section bg='secondary'>
      <div className='competence'>
        <div className='cultural__competence'>
          <SectionHeading>How we do it</SectionHeading>

          <Title as='h3'>
            Violet is the first to standardize cultural competence.
          </Title>

          <div className='competence__wrapper'>
            <p className='competence__description'>
              By translating decades worth of research, we’ve identified the
              core elements of cultural competence. This clinically-measured
              framework allows us to objectively benchmark providers across the
              industry.
            </p>
            <p className='competence__description'>
              Now, we can better understand as an industry how we’re doing and
              provide a baseline for education and improvement.
            </p>
          </div>
        </div>
        <img className='competence__image' src={Customer} alt='customer' />
      </div>
    </Section>
  );
};

