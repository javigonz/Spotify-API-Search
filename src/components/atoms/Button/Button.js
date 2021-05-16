import React from "react";

import "./Button.css";

export const Button = (props) => {
  const { text, onClick } = props;

  const handleClick = (event) => {
    event?.preventDefault();
    onClick(event);
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
