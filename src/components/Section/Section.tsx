import { ReactNode } from "react";
import { Container } from "../Container";
import "./Section.scss";
interface SectionProps {
  children: ReactNode;
  bg?: "white" | "secondary" | "primary" | "blue" | "gray";
}

export const Section: React.FC<SectionProps> = ({
  children,
  bg = "primary",
}) => {
  return (
    <section className={`section ${bg}`}>
      <Container>{children}</Container>
    </section>
  );
};
