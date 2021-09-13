import React from 'react';

const Title = ({ number, text }) => {
  return (
    <h1 className="title">
      <span className="title--blue">{ number }</span> { text }
    </h1>
  )
};

export default Title;