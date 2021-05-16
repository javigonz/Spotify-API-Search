import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import Categories from "../Categories";
import Browser from "../Browser";

const SearchResult = (props) => {
  const {
    isValidSession,
    paginationNext,
    result,
    setCategory,
    selectedCategory,
  } = props;
  const [resultSelected, setResultSelected] = useState({});
  const { albums, artists, tracks } = result;

  useEffect(() => {
    const categorySelected = Object.entries(result).find((element) => {
      return element[0] === selectedCategory;
    });
    setResultSelected(categorySelected[1]);
  }, [selectedCategory, result]);

  const onSelectedCategoryHandle = (category) => {
    setCategory(category);
  };

  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            session_expired: true,
          },
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <Categories
        result={result}
        onSelected={onSelectedCategoryHandle}
        selectedCategory={selectedCategory}
        totalItems={resultSelected.total || 0}
      />
      <Browser
        data={resultSelected}
        selectedCategory={selectedCategory}
        paginationNext={paginationNext}
      />
    </React.Fragment>
  );
};

export default SearchResult;
