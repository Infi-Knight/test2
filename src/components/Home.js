import React from 'react';
import { Tab } from 'semantic-ui-react';
import Chat from './chat/Chat';
import Todo from './todo/Todo';

const panes = [
  {
    menuItem: 'Chat',
    render: () => (
      <Tab.Pane>
        <Chat />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Todo List',
    render: () => (
      <Tab.Pane>
        <Todo />
      </Tab.Pane>
    )
  }
];

const TabExampleBasic = () => <Tab panes={panes} />;

export default TabExampleBasic;
