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
        <div className="footer-about col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
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
        <div className="footer-help col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
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
        <div className="footer-sign col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          {" "}
          <h5>My Account</h5>
          {account.map((account, index) => {
            return (
              <div key={index}>
                <Link to={account.titleLink}>
                  <h5>{account.title}</h5>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer-follow col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="follow">
            <h5>Follow Us</h5>
            {social.map((social, index) => {
              return (
                <div key={index}>
                  <h5>{social.title}</h5>
                </div>
              );
            })}
          </div>
          <div className="download">
            <h5>Download the App</h5>
            {down.map((down, index) => {
              return (
                <div key={index}>
                  <Link to={down.titleLink} target="_blank" rel="noreferrer">
                    <h5>{down.title}</h5>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="payment">
            <h5>Payment Options</h5>
            {pay.map((pay, index) => {
              return (
                <div key={index} className="images">
                  <img src={pay.title} alt="payment option" loading="lazy" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-two">
        <h5> Terms and Conditions | Privacy Policy </h5>
        <h5>© 2022 Goto Concept LLC All rights reserved. </h5>
        <p>
          {" "}
          <span>Alcoholic Drinks Control Act 2010:</span>Excessive alcohol
          consumption is harmful to your health & These products are not for
          sale to persons under the age of 18 years
        </p>
      </div>
    </div>
  );
};

export default Footer;
