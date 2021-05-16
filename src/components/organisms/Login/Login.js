import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "../../molecules/Header";
import Button from "../../atoms/Button";
import { ENV } from "../../../constants/constants";
import "./Login.css";

export const LoginUnconnected = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = ENV;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const sessionExpired = location?.state?.session_expired;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/home" />
      ) : (
        <div>
          <div className="login">
            <Header />
            <Button text="Login into Spotify" onClick={handleLogin} />
            {sessionExpired && (
              <div className="login__nav">
                <h2 className="login__nav--error">
                  Session expired. Please login again.
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(LoginUnconnected);
