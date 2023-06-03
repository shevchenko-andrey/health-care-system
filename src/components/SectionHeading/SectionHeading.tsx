import "./SectionHeading.scss";

interface ISectionHeadingProps {
  children: React.ReactNode;
  color?: "white" | "primary";
}

export const SectionHeading: React.FC<ISectionHeadingProps> = ({
  children,
  color = "primary",
}) => {
  return <p className={`heading ${color}`}>{children}</p>;
};
