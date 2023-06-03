import { ReactNode } from "react";
import { Container } from "../Container";

interface SectionProps {
  children: ReactNode;
  bg: "white" | "secondary" | "primary" | "blue";
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
