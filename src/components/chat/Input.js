import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Input = props => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(message);
    setMessage(message);
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Field>
        <input
          placeholder="Your message"
          type="text"
          value={message}
          onChange={e => handleChange(e)}
        />
      </Form.Field>
      <Button value="send" type="submit">
        submit
      </Button>
    </Form>
  );
};

export default Input;
