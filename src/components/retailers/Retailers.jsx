import React from "react";
import "./Retailers.css";
import { retail } from "../../miss";
import { how, web } from "../../nav";

const Retailers = () => {
  return (
    <div className="retailers-section">
      <div className="banner-retailers">
        <h2>Unlock the Digital Bar: Bring Your Grocery Store to the Web! </h2>
        <p>
          Having an internet presence for your business is crucial, and we can
          assist you with selling more organic farm produce online.
        </p>
      </div>
      <div className="retailers-grow">
        <h3>Unlock Your Business Potential with Our Expertise</h3>
        <div className="grow-container">
          <div className="save">
            {retail.map((item, index) => {
              return (
                <div key={index} className="grow-img">
                  <div className="img-one">
                    <h3>{item.titleIcon}</h3>
                  </div>
                  <div className="img-two">
                    <h3>{item.title}</h3>
                    <p>{item.titlePar}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grow-text">
            <img src="./assets/Win.jpeg" alt="Proelio" loading="lazy" />
          </div>
        </div>{" "}
        <div className="ret-how">
          <h3>How We Help Your Business?</h3>
          <div className="retailer-lis">
            {how.map((item, index) => {
              return (
                <div key={index} className="retailer-list-one">
                  <h2>{item.titleIcon}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.titlelisting}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="store-website">
          <div className="website-text">
            <h3>Store Micro Website</h3>
            {web.map((item, index) => {
              return (
                <div key={index} className="retailer-web">
                  <h2>{item.titleIcon}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.titlelisting}</p>
                </div>
              );
            })}
          </div>
          <div className="website-photo">
            <img src="././assets/Untitled1.png" alt="store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retailers;
