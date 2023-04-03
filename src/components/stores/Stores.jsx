import React from "react";
import "./Stores.css";
import { BsSearch } from "react-icons/bs";
const Stores = () => {
  return (
    <div className="store-container">
      <div className="stores-banner">
        <div className="banner">
          <h2>Find liqour stores around you. </h2>
          <p>
            Get your favorite beer, wine & spirits delivered to your door step.
          </p>
          <div className="fire">
            <input
              type="text"
              placeholder=" Enter Your Street or Home Address"
            />{" "}
            <h3>
              {" "}
              <BsSearch />
            </h3>
          </div>
        </div>
        <div className="store-category">
          <h3>Shop by Category</h3>
        </div>
      </div>
    </div>
  );
};

export default Stores;
