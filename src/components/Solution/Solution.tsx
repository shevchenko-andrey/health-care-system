import { Section } from "../Section/Section";
import { SectionHeading } from "../SectionHeading";
import { Title } from "../Title";

import "./Solution.scss";
import { SolutionCard } from "./SolutionCard";
import { solutions } from "./mockData";

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
          {solutions.map(({ id, description, image, tips, title, bg }) => (
            <SolutionCard
              key={id}
              description={description}
              image={image}
              tips={tips}
              title={title}
              bg={bg}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
