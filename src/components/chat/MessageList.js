import React from 'react';
import { Feed } from 'semantic-ui-react';

const MessageList = props => {
  return (
    <Feed>
      {props.messages.map((message, index) => {
        return (
          <Feed.Event key={index}>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{`${message.senderId} sent`}</Feed.User>
                <br />
                <Feed.Meta>{message.text}</Feed.Meta>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          // <li key={index}>
          //   <h4>{message.senderId}</h4>
          //   <p>{message.text}</p>
          // </li>
        );
      })}
    </Feed>
  );
};

export default MessageList;
