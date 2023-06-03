import { Title } from "../../Title";
import "./SolutionCard.scss";

interface SolutionCardProps {
  title: string;
  image: string;
  description: string;
  tips: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  image,
  description,
  tips,
  title,
}) => {
  return (
    <div>
      <div>
        <img src={image} alt='' />
        <Title as='h3'>{title}</Title>
        <p>{description}</p>
        <div>
          <p>{tips}</p>
        </div>
      </div>
    </div>
  );
};
