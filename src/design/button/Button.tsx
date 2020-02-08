import React from "react";
import { Button as MaterialButton } from "@material-ui/core";

interface Props {
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, variant, onClick }) => {
  return (
    <MaterialButton onClick={onClick} variant={variant}>
      {children}
    </MaterialButton>
  );
};

export default Button;
