import React from "react";
import "./Promotions.css";

const Promotions = () => {
  return (
    <div className="promotions-container">
      <div className="promotions-header">
        <div className="promo">
          <div className="promo-img">
            <img src="./assets/banner.png" alt="spice" />
          </div>
          <div className="promo-text">
            <h4>Dear valued customer,</h4>
            <p>
              Thank you for your interest in our products and services.
              Unfortunately, we do not have any current promotions available at
              this time. However, we regularly update our website with new deals
              and offers, so we encourage you to check back soon to see what's
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
