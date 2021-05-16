import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Button from "../../atoms/Button";
import "./NotFound.css";

const NotFound = (props) => {
  const { history } = props;

  const buttonClickHandle = () => {
    history.push("/home");
  };

  return (
    <React.Fragment>
      <div className="home__notfound">
        <Header />
        <h2 className="home__notfound--error">Upppsss!!! page not found.</h2>
        <Button text="Return to Home" onClick={buttonClickHandle} />
      </div>
    </React.Fragment>
  );
};

export default NotFound;
