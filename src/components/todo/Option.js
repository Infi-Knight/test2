import React from 'react';
const Option = props => (
  <p>
    <p>
      {props.count}. {props.optionText}
    </p>
    <button
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </p>
);

export default Option;
