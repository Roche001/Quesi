import React from "react";
import "./Retailers.css";
import { retail } from "../../miss";

const Retailers = () => {
  return (
    <div className="retailers-section">
      <div className="banner-retailers">
        <h2>Unlock the Digital Bar: Bring Your Liquor Store to the Web! </h2>
        <p>
          Having an internet presence for your business is crucial, and we can
          assist you with selling more alcohol online.
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
        </div>
      </div>
    </div>
  );
};

export default Retailers;
