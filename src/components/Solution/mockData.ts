import Credentialing from "../../assets/Credentialing.png";
import Upskilling from "../../assets/Upskilling.png";

interface ISolution {
  id: number;
  title: string;
  description: string;
  tips: string;
  image: any;
  bg: "primary" | "blue";
}

export const solutions: ISolution[] = [
  {
    id: 1,
    title: "Credentialing",
    description: `We benchmark the cultural competence of your care team and use those insights to help match patients to the right clinician.`,
    tips: `Learn how we leverage insights for better patient-matching.`,
    image: Credentialing,
    bg: "blue",
  },
  {
    id: 2,
    title: "Upskilling",
    description:
      "We believe every clinician can provide inclusive care, that's why we teach and upskill cultural competence.",
    tips: "Learn how we leverage insights for better patient-matching.",
    image: Upskilling,
    bg: "primary",
  },
];
