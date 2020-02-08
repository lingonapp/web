import React from "react";
import { firestore } from "firebase";
import { SuspenseWithPerf, useUser, useFirestoreCollection } from "reactfire";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Card,
  makeStyles
} from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";

interface Props {}
interface LatestMessageUser {
  name?: string;
  photoUrl?: string;
}
interface LatestMessage {
  createdAt?: string;
  from?: LatestMessageUser;
  text: string;
}
interface Chat {
  userIds?: string[];
  latestMessage?: LatestMessage;
  users?: { [key: string]: LatestMessageUser };
}
type AllChats = {
  [key: string]: Chat;
};

const useStyles = makeStyles(theme => ({
  chatItem: {
    textDecoration: "none",
    "&:nth-child(n+2)": {
      marginTop: theme.spacing(1)
    }
  },
  avatar: {
    width: 45,
    height: "100%"
  }
}));

const ChatList = () => {
  const classes = useStyles();
  const { uid } = useUser();
  const yourChatsRef = firestore()
    .collection("chats")
    .where("userIds", "array-contains", uid);
  const data = useFirestoreCollection(yourChatsRef);
  const chats: AllChats = ((data as unknown) as firestore.QuerySnapshot).docs.reduce(
    (prev, chatDoc) => ({
      ...prev,
      [chatDoc.id]: chatDoc.data()
    }),

    {}
  );
  return (
    <SuspenseWithPerf
      fallback={"loading burrito status..."}
      traceId={"load-burrito-status"}
    >
      <List>
        {chats ? (
          Object.entries(chats).map(([chatId, chat], i) => {
            return (
              <div className={classes.chatItem}>
                <RouteLink to={`/chat/${chatId}`}>
                  <Card key={`chat-list-item-${chatId}`}>
                    <ListItem>
                      <ListItemAvatar>
                        {chat.latestMessage?.from?.photoUrl ? (
                          <img
                            src={chat.latestMessage?.from?.photoUrl}
                            alt="Latest message avatar"
                            className={classes.avatar}
                          />
                        ) : (
                          <Avatar />
                        )}
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          Object.values(chat?.users ?? {})
                            ?.map(user => user.name)
                            .join(", ") ?? "Chat message"
                        }
                        secondary={chat.latestMessage?.text}
                      />
                    </ListItem>
                  </Card>
                </RouteLink>
              </div>
            );
          })
        ) : (
          <div>No chats</div>
        )}
      </List>
    </SuspenseWithPerf>
  );
};

export default ChatList;
