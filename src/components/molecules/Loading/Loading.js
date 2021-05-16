import React from "react";
import ReactDOM from "react-dom";

import "./Loading.css";

const Loading = (props) => {
  const { open = false } = props;

  return (
    open && (
      <div className="loading">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
};

export default Loading;
