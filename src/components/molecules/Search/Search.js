import React, { useState } from "react";

import InputSearch from "../../atoms/InputSearch";
import Button from "../../atoms/Button";
import "./Search.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const inputSearchChangeHandle = (evt) => {
    const value = evt?.target?.value;
    setSearchValue(value);
  };

  const searchHandle = (event) => {
    event?.preventDefault();
    if (searchValue.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchValue);
    } else {
      props.handleSearchInvalid();
      setErrorMsg("Please enter a valid search string!!!");
    }
  };

  return (
    <form onSubmit={searchHandle} className="home__search">
      <div className="home__search--top">
        <div className="home__search--inputContainer">
          <InputSearch
            value={searchValue}
            placeholder="Search by album, artist or tracks ..."
            onChange={inputSearchChangeHandle}
          />
        </div>
        <Button text="Search" onClick={searchHandle} />
      </div>
      {errorMsg && <p className="home__search--error">{errorMsg}</p>}
    </form>
  );
};

export default Search;
