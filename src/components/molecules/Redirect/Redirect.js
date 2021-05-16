import React, { useEffect } from "react";

import { getParamValues } from "../../../services/api";

const Redirect = (props) => {
  useEffect(() => {
    const { saveTimeExpired, history, location } = props;

    try {
      if (!location?.hash) {
        return history.push("/home");
      }

      const access_token = getParamValues(location.hash);
      const timeExpired = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", timeExpired);
      saveTimeExpired(timeExpired);
      history.push("/home");
    } catch (error) {
      history.push("/");
    }
  }, []);

  return null;
};

export default Redirect;
