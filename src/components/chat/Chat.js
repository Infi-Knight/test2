import React, { useState } from 'react';
import ChatApp from './ChatApp';
import ChatMessage from './ChatMessage';
import Signup from './Signup';

import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
  instanceLocator: 'v1:us1:ca616404-d981-4724-8e30-086757e7f5f1',
  key:
    'fa011403-9503-4d7e-bf5e-87dbc946ed91:bTKL54xFYG9n/VjuhrBCiIfqZ58iyWkFUe7Hem6f+VY='
});

const Chat = () => {
  const [currentView, setCurretnView] = useState('signup');
  const [currentId, setCurrentId] = useState('');
  const [currentUsername, setCurrentUsername] = useState('');

  const createUser = username => {
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(currentUser => {
        setCurrentUsername(username);
        setCurrentId(username);
        setCurretnView('chatApp');
      })
      .catch(err => {
        if (err.status === 400) {
          setCurrentUsername(username);
          setCurrentId(username);
          setCurretnView('chatApp');
        } else {
          console.log(err.status);
        }
      });
  };

  const changeView = view => {
    setCurretnView(view);
  };

  let view = '';

  if (currentView === 'ChatMessage') {
    view = <ChatMessage changeView={changeView} />;
  } else if (currentView === 'signup') {
    view = <Signup onSubmit={createUser} />;
  } else if (currentView === 'chatApp') {
    view = <ChatApp currentId={currentId} />;
  }
  return <div className="App">{view}</div>;
};

export default Chat;
