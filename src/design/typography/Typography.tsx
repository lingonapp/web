import React from "react";
import { Typography as MaterialTypography } from "@material-ui/core";

interface Props {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2";
  className?: string;
}

const Typography: React.FC<Props> = ({ children, variant, className }) => {
  return (
    <MaterialTypography className={className} variant={variant}>
      {children}
    </MaterialTypography>
  );
};

export default Typography;
