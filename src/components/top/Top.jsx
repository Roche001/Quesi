import React from "react";
import "./Top.css";
import { GiGrapes } from "react-icons/gi";

const Top = () => {
  return (
    <div className="cork">
      <div className="cork-photo">
        <h4>
          <GiGrapes />
        </h4>
      </div>
      <div className="cork-text">
        <h4>
          Roche.<span>Liqour</span>
        </h4>
      </div>
    </div>
  );
};

export default Top;
