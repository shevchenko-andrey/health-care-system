import { Title } from "../../Title";
import "./SolutionCard.scss";

interface SolutionCardProps {
  title: string;
  image: string;
  description: string;
  bg: "blue" | "primary";
  tips: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  image,
  bg = "primary",
  description,
  tips,
  title,
}) => {

    const textColor = bg === "primary" ? "secondary" : "primary";
  return (
    <div className={`solution-card ${bg}`}>
      <div className='solution-card__content'>
        <img className='solution-card__image' src={image} alt='' />
        <Title color={textColor} as='h3'>
          {title}
        </Title>
        <p className='solution-card__description'>{description}</p>
        <div className='solution-card__tips'>
          <p>{tips}</p>
        </div>
      </div>
    </div>
  );
};
