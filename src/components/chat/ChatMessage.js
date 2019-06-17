import React from 'react';

const ChatMessage = props => {
  const changeView = () => {
    props.changeView('signup');
  };

  return (
    <div>
      <button onClick={changeView}>Send a message</button>
    </div>
  );
};

export default ChatMessage;
