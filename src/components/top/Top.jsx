import React from "react";
import "./Top.css";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top">
      <div className="logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Top;
