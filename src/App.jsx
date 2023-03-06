import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Beer from "./components/beer/Beer";
import Extras from "./components/extras/Extras";
import Promotions from "./components/promotions/Promotions";
import Retailers from "./components/retailers/Retailers";
import Spirits from "./components/spirits/Spirits";
import Stores from "./components/stores/Stores";
import Wine from "./components/wine/Wine";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Beer path="Beer" exact element={<Beer />} />
        <Route Extras path="Extras" exact element={<Extras />} />
        <Route Promotions path="Promotions" exact element={<Promotions />} />
        <Route Retailers path="Retailers" exact element={<Retailers />} />
        <Route Spirits path="Spirits" exact element={<Spirits />} />
        <Route Stores path="Stores" exact element={<Stores />} />
        <Route Wine path="Wine" exact element={<Wine />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
