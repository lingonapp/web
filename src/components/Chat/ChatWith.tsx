import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

interface Props {
  id: string;
}

const useStyles = makeStyles(theme => ({
  chatHead: {
    padding: theme.spacing(3, 1),
    background: theme.palette.primary.main
  }
}));

const ChatWith: React.FC<Props> = ({ id }) => {
  const history = useHistory();
  const classes = useStyles();
  if (!id) {
    history.push("/");
  }
  const goBack = () => history.push("/chat");
  return (
    <div>
      <div className={classes.chatHead}>
        <ArrowBack onClick={goBack} />
      </div>
    </div>
  );
};

export default ChatWith;
