import React, { useState } from "react";
import "./Cookie.css";
import Fortune from "../Fortune/Fortune";

// import crumbs
import crumb1 from "../Crumbs/35.png";
import crumb2 from "../Crumbs/25.png";
import crumb3 from "../Crumbs/26.png";
import crumb4 from "../Crumbs/27.png";
import crumb5 from "../Crumbs/28.png";
import crumb6 from "../Crumbs/29.png";
import crumb7 from "../Crumbs/31.png";
import crumb8 from "../Crumbs/32.png";
import crumb9 from "../Crumbs/33.png";
import crumb10 from "../Crumbs/34.png";

const Cookie = () => {
  const [isBroken, setIsBroken] = useState(false);

  const breakCookieHandler = () => {
    setIsBroken(!isBroken);
  };

  return (
    <div>
      <button
        className={`cookie load ${isBroken ? "break" : ""}`}
        onClick={breakCookieHandler}
      >
        <div className="cookie-section left"></div>
        <div className="cookie-section right"></div>
        <div className="cookie-crumbs">
          <img src={crumb1} alt="" className="cookie-crumb" />
          <img src={crumb2} alt="" className="cookie-crumb" />
          <img src={crumb3} alt="" className="cookie-crumb" />
          <img src={crumb4} alt="" className="cookie-crumb" />
          <img src={crumb5} alt="" className="cookie-crumb" />
          <img src={crumb6} alt="" className="cookie-crumb" />
          <img src={crumb7} alt="" className="cookie-crumb" />
          <img src={crumb8} alt="" className="cookie-crumb" />
          <img src={crumb9} alt="" className="cookie-crumb" />
          <img src={crumb10} alt="" className="cookie-crumb" />
        </div>
        <Fortune />
      </button>
    </div>
  );
};

export default Cookie;
