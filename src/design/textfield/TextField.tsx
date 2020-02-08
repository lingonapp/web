import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";

interface Props {
  id?: string;
  label?: string;
  type?: string;
  value: string;
  onChange: (event: { target: { value: string } }) => void;
}

const TextField: React.FC<Props> = ({ id, label, type, onChange, value }) => {
  return (
    <MaterialTextField
      id={id}
      label={label}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextField;
