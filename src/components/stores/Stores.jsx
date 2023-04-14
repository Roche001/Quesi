import React from "react";
import "./Stores.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { cat } from "../../drinks";
import { work, pop } from "../../drinks";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Stores = () => {
  const options = {
    margin: 1,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
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
          <div className="store-items">
            {cat.map((cat, index) => {
              return (
                <div key={index}>
                  <Link
                    to={cat.titleLink}
                    id="menu-two"
                    className="drinks-one  stores-one"
                  >
                    <img src={cat.titleImage} alt="liqour" loading="lazy" />
                    <h5>{cat.title}</h5>
                  </Link>
                </div>
              );
            })}
          </div>{" "}
          <div className="store-works">
            <h3> How it Works</h3>
            <div className="work-store">
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
            {/* <button>Start Shopping</button> */}
          </div>
          <div className="store-product">
            <h3>Popular Products</h3>
            <OwlCarousel
              className="slider-items owl-carousel pop-store"
              {...options}
            >
              {pop.map((pop, index) => {
                return (
                  <Link to={pop.titleLink} id="about">
                    <div key={index} className="pop-item">
                      <img src={pop.titleImage} alt="work" loading="lazy" />
                      <h5>{pop.title}</h5>
                      <p>{pop.titleSize}</p>
                    </div>{" "}
                  </Link>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
