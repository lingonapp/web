import React from "react";
import Typography from "../../design/typography/Typography";
import { useParams } from "react-router-dom";
import ChatWith from "./ChatWith";
import ChatList from "./ChatList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  chatList: {
    padding: theme.spacing(1, 2)
  }
}));

const Chat: React.FC = () => {
  const { chatId } = useParams();
  const classes = useStyles();
  return (
    <>
      {chatId ? (
        <ChatWith id={chatId}></ChatWith>
      ) : (
        <div className={classes.chatList}>
          <Typography variant="h1">Chat</Typography>
          <ChatList />
        </div>
      )}
    </>
  );
};

export default Chat;
