import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: "primary" | "secondary" | "white" | "pink";
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  bg = "primary",
  ...rest
}) => {
  return (
    <button className={`button ${bg}`} {...rest}>
      {children}
    </button>
  );
};
