import React from "react";
import "./Footer.css";
import { lazy } from "../../miss";
import { Link } from "react-router-dom";
import { help } from "../../miss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-one">
        <div className="footer-about">
          <h5>ABOUT</h5>
          {lazy.map((lazy, index) => {
            return (
              <div key={index}>
                <Link to={lazy.titleLink}>
                  <h5>{lazy.title}</h5>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-help">
          {" "}
          <h5>HELP</h5>
          {help.map((help, index) => {
            return (
              <div key={index}>
                <Link to={help.titleLink}>
                  <h5>{help.title}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
