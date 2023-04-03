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
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="././assets/som.png" alt="logo" loading="lazy" />
        </Link>
      </div>

      <div className="top-icon" onClick={toggleMenu}>
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
      <div className={menuOpen ? "menu-items-one" : "menu-items"}>
        <div className="side-bar">
          {bar.map((bar, index) => {
            return (
              <div key={index} className="menu-one">
                <Link to={bar.navLink} id="menu-two" onClick={handleClick}>
                  <h5>{bar.title}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
