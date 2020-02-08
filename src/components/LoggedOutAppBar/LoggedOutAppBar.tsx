import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "../../design/appbar/AppBar";
import ToolBar from "../../design/toolbar/ToolBar";
import Typography from "../../design/typography/Typography";
import Button from "../../design/button/Button";

interface Props {}

const useStyles = makeStyles(theme => ({
  toolbar: {
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-start"
  },
  offset: {
    ...theme.mixins.toolbar
  }
}));

const LoggedOutAppBar: React.FC<Props> = () => {
  const classes = useStyles();
  let history = useHistory();

  const goToLogin = () => history.push("/login");
  return (
    <>
      <AppBar>
        <ToolBar variant="dense" className={classes.toolbar}>
          <Typography variant="h3" className={classes.title}>
            Lingon
          </Typography>
          <Button onClick={goToLogin} variant="outlined">
            Log in
          </Button>
        </ToolBar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default LoggedOutAppBar;
