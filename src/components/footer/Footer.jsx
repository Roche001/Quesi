import React from "react";
import "./Footer.css";
import { lazy } from "../../miss";
import { Link } from "react-router-dom";
import { help } from "../../miss";
import { account } from "../../miss";
import { social } from "../../miss";
import { down } from "../../miss";
import { pay } from "../../miss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-one container-fluid">
        <div className="footer-about">
          <h5>ABOUT</h5>
          {lazy.map((lazy, index) => {
            return (
              <div key={index}>
                <Link to={lazy.titleLink} id="about">
                  <h6>{lazy.title}</h6>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-help ">
          {" "}
          <h5>HELP</h5>
          {help.map((help, index) => {
            return (
              <div key={index}>
                <Link to={help.titleLink} id="about">
                  <h6>{help.title}</h6>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-sign">
          {" "}
          <h5>My Account</h5>
          {account.map((account, index) => {
            return (
              <div key={index}>
                <Link to={account.titleLink} id="about">
                  <h6>{account.title}</h6>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-follow ">
          <div className="follow">
            <h5>Follow Us</h5>
            <div className="follow-social">
              {social.map((social, index) => {
                return (
                  <div key={index} className="about">
                    <Link
                      to={social.titleLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5>{social.title}</h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="download">
            <h5>Download Our App</h5>
            <div className="download-social">
              {down.map((down, index) => {
                return (
                  <div key={index} className="dark">
                    <Link to={down.titleLink} target="_blank" rel="noreferrer">
                      <h5>{down.title}</h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="payment">
            <h5>Payment Options</h5>
            <div className="images">
              {pay.map((pay, index) => {
                return (
                  <div key={index} className="images-one">
                    <img src={pay.title} alt="payment option" loading="lazy" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <h5> Terms and Conditions | Privacy Policy </h5>
        <h5>© 2023 Grocery LLC All rights reserved. </h5>
      </div>
    </div>
  );
};

export default Footer;
