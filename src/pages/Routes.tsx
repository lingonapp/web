import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AuthCheck } from "reactfire";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import { useMediaQuery, useTheme } from "@material-ui/core";

interface Props {}

const PublicRoutes = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
const PrivateRoutes = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  if (matches) {
    return <div>Maybe you should use out mobile app instead?</div>;
  }

  return (
    <Router>
      <Switch>
        <Route path="/chat/:chatId">
          <Dashboard />
        </Route>
        <Route path="/map">
          <Dashboard />
        </Route>
        <Route path="/chat">
          <Dashboard />
        </Route>
        <Redirect to="/map" />
      </Switch>
    </Router>
  );
};

const Routes: React.FC<Props> = () => {
  return (
    <AuthCheck fallback={<PublicRoutes />}>
      <PrivateRoutes />
    </AuthCheck>
  );
};

export default Routes;
