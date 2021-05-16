import React from "react";

import { isEmptyResult } from "../../../helpers/helpers";
import ButtonCategory from "../../atoms/ButtonCategory";
import "./Categories.css";

const Categories = (props) => {
  const { result, onSelected, selectedCategory, totalItems } = props;
  const { albums, artists, tracks } = result;

  const onClickHandle = (category) => {
    onSelected(category);
  };

  return (
    <>
      {!isEmptyResult(result) && (
        <div className="home__categories">
          <div>
            {albums?.items?.length > 0 && (
              <ButtonCategory
                text="Albums"
                category="albums"
                selectedCategory={selectedCategory}
                onClick={onClickHandle}
              />
            )}
            {artists?.items?.length > 0 && (
              <ButtonCategory
                text="Artists"
                category="artists"
                selectedCategory={selectedCategory}
                onClick={onClickHandle}
              />
            )}
            {tracks?.items?.length > 0 && (
              <ButtonCategory
                text="Tracks"
                category="tracks"
                selectedCategory={selectedCategory}
                onClick={onClickHandle}
              />
            )}
          </div>
          <div className="home__counter">
            <a className="home__counter--info">{`Found ${totalItems} ${selectedCategory}`}</a>
          </div>
          <hr className="home__categories--split" />
        </div>
      )}
    </>
  );
};

export default Categories;
