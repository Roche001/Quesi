import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Beer from "./components/beer/Beer";

const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Beer />
      </Routes>
    </Router>
  );
};

export default App;
