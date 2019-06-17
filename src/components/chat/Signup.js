import React, { useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

const Signup = props => {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(username);
  };

  return (
    <div>
      <Header as="h1">Enter room</Header>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Field>
          <label>Username</label>
          <input type="text" value={username} onChange={e => handleChange(e)} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Signup;
