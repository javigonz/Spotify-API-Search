import React from "react";

import "./ButtonCategory.css";

export const ButtonCategory = (props) => {
  const { text, category, selectedCategory, onClick } = props;

  const handleClick = (event) => {
    event?.preventDefault();
    onClick(category);
  };

  return (
    <button
      className={`${
        selectedCategory === category
          ? "categoryButtonActive"
          : "categoryButton"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonCategory;
