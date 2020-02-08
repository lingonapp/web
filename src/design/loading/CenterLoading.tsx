import React from "react";
import { CircularProgress } from "@material-ui/core";

interface Props {}

const CenterLoading: React.FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default CenterLoading;
