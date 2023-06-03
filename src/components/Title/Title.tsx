import React, { ReactNode } from "react";

import "./Title.scss";

interface TitleProps {
  children: ReactNode;
  color?: "primary" | "secondary";
  position?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4";
}

export const Title: React.FC<TitleProps> = ({
  children,
  color = "primary",
  position = "left",
  as: Component = "h2",
}) => {
  return (
    <Component className={`title ${color} ${position}`}>{children}</Component>
  );
};
