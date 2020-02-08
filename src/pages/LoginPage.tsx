import React, { useState } from "react";
import LoggedOutAppBar from "../components/LoggedOutAppBar/LoggedOutAppBar";
import { Container } from "@material-ui/core";
import Typography from "../design/typography/Typography";
import TextField from "../design/textfield/TextField";
import Button from "../design/button/Button";
import Link from "../design/link/Link";
import { useAuth } from "reactfire";
import StyledFirebaseAuth from "react-firebaseui/FirebaseAuth";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface Props {}

const signIn = async (auth: any, username: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(username, password);
  } catch (e) {
    console.error(e);
  }
};

const LoginPage: React.FC<Props> = () => {
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = ({ target: { value = "" } }) => setUsername(value);
  const changePassword = ({ target: { value = "" } }) => setPassword(value);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
  const onSubmit = () => signIn(auth, username, password);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <React.Suspense fallback="Loading auth">
      <LoggedOutAppBar />
      <Container maxWidth="sm">
        <Typography variant="h1">Log in</Typography>
        <TextField
          id="login-username"
          label="Email"
          value={username}
          onChange={changeUsername}
          type="email"
        />
        <TextField
          id="login-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={changePassword}
        />
        {showPassword ? (
          <VisibilityOff onClick={togglePasswordVisibility} />
        ) : (
          <Visibility onClick={togglePasswordVisibility} />
        )}
        <Button onClick={onSubmit}>Sign in</Button>
        <Link to="/signup">Sign up</Link>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      </Container>
    </React.Suspense>
  );
};

export default LoginPage;
