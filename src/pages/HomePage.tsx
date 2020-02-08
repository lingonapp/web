import React from "react";
import LoggedOutAppBar from "../components/LoggedOutAppBar/LoggedOutAppBar";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <div>
      <LoggedOutAppBar />
      <div>
        Home
      </div>
    </div>
  );
};

export default HomePage;
