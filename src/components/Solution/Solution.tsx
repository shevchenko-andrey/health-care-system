import { Section } from "../Section/Section";
import { SectionHeading } from "../SectionHeading";
import { Title } from "../Title";

import "./Solution.scss";
import { SolutionCard } from "./SolutionCard";

export const Solution: React.FC = () => {
  return (
    <Section bg='white'>
      <div className='solution-section'>
        <div className='solution-section__top'>
          <SectionHeading>The solution</SectionHeading>

          <Title>
            Delivering inclusive health care is easier than ever with Violet.
          </Title>
        </div>

        <div className='solution-section__bottom'>
          <SolutionCard title={``} image={``} description={``} tips={``} />
          <SolutionCard title={""} image={""} description={""} tips={""} />
        </div>
      </div>
    </Section>
  );
};
