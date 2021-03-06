import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div>
      <h3>Your Options</h3>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    {!props.options.length && <p>Please add an option to get started</p>}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
