import React from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top">
      <div className="logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div className="top-icon">
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
    </div>
  );
};

export default Top;
