import React from "react";

import BrowserItem from "./BrowserItem";
import Button from "../../atoms/Button";
import "./Browser.css";

const Browser = ({ data = {}, selectedCategory, paginationNext }) => {
  const showPagination = () => {
    return data?.items?.length > 0 && data?.next;
  };

  return (
    <div className="home__browser">
      <div className="home__browser--cards">
        {data?.items?.map((item, index) => {
          return <BrowserItem key={index} index={index} item={item} />;
        })}
      </div>
      <div className="home__browser--pagination">
        {showPagination() && (
          <Button
            text="View more"
            onClick={() => paginationNext(selectedCategory)}
          />
        )}
      </div>
    </div>
  );
};

export default Browser;
