import React from "react";
import "./Home.css";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h2>Order alcohol for delivery or pickup </h2>
        <p>
          Get your favorite beer, wine & spirits delivered to your door step
        </p>
        <div className="fire">
          <input type="text" placeholder=" Enter Your Street or Home Address" />{" "}
          <h3>
            {" "}
            <BsSearch />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
