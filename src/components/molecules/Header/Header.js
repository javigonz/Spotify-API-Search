import React from "react";

import logoSpotify from "../../../images/logospoty.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Spotify</h1>
      <img
        className="header__logo--icon"
        src={logoSpotify}
        alt="Spotify"
        width="50"
        height="50"
      />
      <h1 className="header__logo">Search</h1>
    </div>
  );
};

export default Header;
