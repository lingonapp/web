import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import Map from "../components/Map/Map";

import Chat from "../components/Chat/Chat";

interface Props {}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: "100%"
  },
  map: {
    flex: 5,
    background: theme.palette.primary.main,
    position: "relative"
  },
  requestHelpButton: {
    position: "absolute",
    right: theme.spacing(3),
    bottom: theme.spacing(3)
  },
  settingsButton: {
    position: "absolute",
    right: theme.spacing(3),
    top: theme.spacing(3),
    background: "white"
  },
  chat: {
    flex: 3
  }
}));

const Dashboard: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.map}>
        <Map />
        <div>
          <Fab
            disabled
            aria-label="settings"
            className={classes.settingsButton}
          >
            <Settings />
          </Fab>
          <Fab
            color="secondary"
            aria-label="request help"
            variant="extended"
            className={classes.requestHelpButton}
          >
            request help
          </Fab>
        </div>
      </div>
      <div className={classes.chat}>
        <Chat />
      </div>
    </div>
  );
};

export default Dashboard;
