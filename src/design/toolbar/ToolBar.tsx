import React from "react";
import { Toolbar as MaterialToolbar } from "@material-ui/core";

interface Props {
  variant?: "regular" | "dense";
  className?: string;
}

const ToolBar: React.FC<Props> = ({ children, variant, className }) => {
  return (
    <MaterialToolbar className={className} variant={variant}>
      {children}
    </MaterialToolbar>
  );
};

export default ToolBar;
