import React, { useState } from "react";
import "./Stores.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import { work, pop, cat } from "../../drinks";
import { city } from "../../miss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Stores = () => {
  const options = {
    responsiveClass: true,
    autoWidth: true,
    loop: true,
    pullDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="store-container">
      <div className="stores-banner">
        <div className="banner-store">
          <h2>Find Grocery stores around you. </h2>
          <p>
            Get fresh fruits, vegatables & many more organic farm produce
            delivered to your door step.
          </p>
        </div>
        <div className="store-category">
          <h3>Shop by Category</h3>
          <div className="store-items">
            {cat.map((cat, index) => {
              return (
                <div key={index}>
                  <Link to={cat.titleLink} id="store" className="store-change">
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
                    </div>
                  </Link>
                );
              })}
            </OwlCarousel>
          </div>
          <div className="pop-avail">
            <h3>Available Locations</h3>
            <p>
              We currently provide service in the following cities, with more to
              be added soon. Stay tuned for updates!
            </p>
            <div className="pop-city">
              {city.map((item, i) => {
                return (
                  <div className="pop-map">
                    <div className="pop-head" onClick={() => toggle(i)}>
                      {item.title}{" "}
                      <h2>
                        {selected === i ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </h2>
                    </div>
                    <div className="pop-middle">{item.description}</div>
                    <div className="pop-content">
                      <Link to={item.link1} id="about">
                        <h6>{item.loc1}</h6>
                      </Link>
                      <Link to={item.link2} id="about">
                        <h6> {item.loc2}</h6>
                      </Link>
                      <Link to={item.link3} id="about">
                        <h6> {item.loc3}</h6>
                      </Link>
                      <Link to={item.link3} id="about">
                        <h6>{item.loc3}</h6>
                      </Link>
                      <Link to={item.link4} id="about">
                        <h6>{item.loc4}</h6>
                      </Link>
                      <Link to={item.link5} id="about">
                        <h6> {item.loc5}</h6>
                      </Link>
                      <Link to={item.link6} id="about">
                        <h6> {item.loc6}</h6>
                      </Link>
                      <Link to={item.link7} id="about">
                        <h6> {item.loc7}</h6>
                      </Link>
                      <Link to={item.link8} id="about">
                        <h6> {item.loc8}</h6>
                      </Link>
                      <Link to={item.link9} id="about">
                        <h6>{item.loc9}</h6>
                      </Link>
                      <Link to={item.link10} id="about">
                        <h6> {item.loc10}</h6>
                      </Link>
                      <Link to={item.link11} id="about">
                        <h6> {item.loc11}</h6>
                      </Link>
                      <Link to={item.link12} id="about">
                        <h6> {item.loc12}</h6>
                      </Link>
                      <Link to={item.link13} id="about">
                        <h6> {item.loc13}</h6>
                      </Link>
                      <Link to={item.link14} id="about">
                        <h6> {item.loc14}</h6>
                      </Link>
                      <Link to={item.link15} id="about">
                        <h6> {item.loc16}</h6>
                      </Link>
                      <Link to={item.link17} id="about">
                        <h6>{item.loc17}</h6>
                      </Link>
                      <Link to={item.link18} id="about">
                        <h6> {item.loc18}</h6>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
