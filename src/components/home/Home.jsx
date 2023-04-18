import React from "react";
import "./Home.css";
import { BsSearch } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import {
  beer,
  crates,
  homewine,
  homespirit,
  homeextras,
  location,
  top,
  work,
  app,
  app2,
} from "../../drinks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h2>Order alcohol for delivery or pickup. </h2>
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
            <div key={index}>
              <Link
                to={beer.titleLink}
                id="menu-two"
                className="drinks-one rotate"
              >
                <img src={beer.titleImage} alt="liqour" loading="lazy" />
                <h5>{beer.title}</h5>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="home-category">
        <h3>Shop by Category</h3>
        <p>Start shopping by browshing your favorite category</p>
        <div className="home-div">
          <div className="home-beer">
            <h2>Beer</h2>{" "}
            <div className="home-beer-div">
              {crates.map((crates, index) => {
                return (
                  <div key={index}>
                    <Link to={crates.titleLink} id="menu-two">
                      <h5>
                        {crates.title} {crates.titleicon}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="home-wine">
            {" "}
            <h2>Wine</h2>
            <div className="home-wine-div">
              {homewine.map((homewine, index) => {
                return (
                  <div key={index}>
                    <Link to={homewine.titleLink} id="menu-two">
                      <h5>
                        {homewine.title} {homewine.titleicon}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="homeextras">
            {" "}
            <h2>Extras</h2>
            <div className="homeextras-div">
              {homeextras.map((homeextras, index) => {
                return (
                  <div key={index}>
                    <Link to={homeextras.titleLink} id="menu-two">
                      <h5>
                        {homeextras.title}
                        {homeextras.titleicon}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="homespirit">
            {" "}
            <h2>Spirits</h2>
            <div className="homespirit-div">
              {homespirit.map((homespirit, index) => {
                return (
                  <div key={index}>
                    <Link to={homespirit.titleLink} id="menu-two">
                      <h5>
                        {homespirit.title} {homespirit.titleicon}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="home-find">
        <div className="home-find-one">
          <h4>
            Liqour stores in your neighbourhood{" "}
            <span>
              <MdLocationPin />
            </span>{" "}
          </h4>
          <p>
            Discover local liquor stores and order your favorite beer, wine,
            liquor, and more online.{" "}
          </p>{" "}
          <Link to="/Stores">
            <button>Find Liqour Store</button>
          </Link>
        </div>
        <div className="home-find-two">
          <img src="./assets/index.jpg" alt="liqour-store" loading="lazy" />
        </div>
      </div>
      <div className="home-location">
        <h3>Browse by Location</h3>
        <p>
          Here are a few places where you can either pick up or have your
          favorite drinks delivered from nearby liquor stores.{" "}
        </p>
        <div className="location-one">
          {" "}
          {location.map((location, index) => {
            return (
              <div key={index}>
                <Link to={location.titleLink} id="menu-two">
                  <h5>{location.title}</h5>
                </Link>
              </div>
            );
          })}
        </div>
        <button>View all Locations</button>
      </div>
      <div className="top-brands">
        <h3>Top Brands</h3>
        <div className="top-liqour">
          {top.map((top, index) => {
            return (
              <div key={index}>
                <div className="top-dog">
                  <img src={top.title} alt="top-brand" loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-works">
        <h3> How it Works</h3>
        <div className="work-flex">
          {work.map((work, index) => {
            return (
              <div key={index} className="work-one">
                <img src={work.title} alt="work" loading="lazy" />
                <h5>{work.imgTitle}</h5>
                <p>{work.description}</p>
              </div>
            );
          })}
        </div>
        <button>Start Shopping</button>
      </div>
      <div className="app">
        <div className="app-one">
          {app.map((app, index) => {
            return (
              <div key={index} className="work-list">
                <img src={app.title} alt="work" loading="lazy" />
              </div>
            );
          })}
        </div>
        <div className="app-two">
          <h4>Download the app</h4>
          <p>
            Download our free app for your phone to improve your shopping
            experience. Get your preferred beer, wine, liquor, and other items
            delivered from nearby shops.{" "}
          </p>
          <div className="app-three">
            {app2.map((app2, index) => {
              return (
                <div key={index} className="hustler">
                  <Link to={app2.titleLink} target="_blank" rel="noreferrer">
                    <img src={app2.title} alt="work" loading="lazy" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
