import React from "react";

import "./InputSearch.css";

const InputSearch = (props) => {
  const { value, onChange, placeholder } = props;

  return (
    <input
      className="inputSearch"
      type="search"
      name="searchValue"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default InputSearch;
