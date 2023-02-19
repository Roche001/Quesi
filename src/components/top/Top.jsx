import React, { useState } from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { bar } from "../../nav";

const Top = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className="top">
      <div className="logo">
        <Link to="/">
          <img src="./assets/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="top-icon">
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>{" "}
      <div className="side-bar">
        {bar.map((bar, index) => {
          return (
            <div key={index} className="menu-one">
              <Link to={bar.navLink}>
                <h5>{bar.title}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top;
