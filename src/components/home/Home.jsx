import React from "react";
import "./Home.css";
import { BsSearch } from "react-icons/bs";
import { beer } from "../../drinks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h2>Order alcohol for delivery or pickup </h2>
        <p>
          Get your favorite beer, wine & spirits delivered to your door step.
        </p>
        <div className="fire">
          <input type="text" placeholder=" Enter Your Street or Home Address" />{" "}
          <h3>
            {" "}
            <BsSearch />
          </h3>
        </div>
      </div>
      <div className="home-drinks">
        {beer.map((beer, index) => {
          return (
            <div key={index} className="menu-one">
              <Link to={beer.titleLink} id="menu-two">
                <img src={beer.titleImage} alt="liqour" loading="lazy" />
                <h5>{beer.title}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
