import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/organisms/Login";
import Redirect from "./components/molecules/Redirect";
import Home from "./components/organisms/Home";
import NotFound from "./components/molecules/NotFound";

const App = (props) => {
  const [timeExpired, setTimeExpired] = useState("0");

  useEffect(() => {
    let newTimeExpired;
    try {
      newTimeExpired = JSON.parse(localStorage.getItem("expiry_time"));
    } catch (error) {
      newTimeExpired = "0";
    }
    setTimeExpired(newTimeExpired);
  }, []);

  const saveTimeExpired = (newTimeExpired) => {
    setTimeExpired(newTimeExpired);
  };

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    return currentTime < timeExpired;
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => (
              <Login isValidSession={isValidSession} {...props} />
            )}
          />
          <Route
            path="/redirect"
            render={(props) => (
              <Redirect
                isValidSession={isValidSession}
                saveTimeExpired={saveTimeExpired}
                {...props}
              />
            )}
          />
          <Route
            path="/home"
            render={(props) => (
              <Home isValidSession={isValidSession} {...props} />
            )}
          />
          <Route component={NotFound} {...props} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
