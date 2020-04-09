import React from "react";

import "./dish.styles.scss";
import close from "../../Assets/close_white.png";

import fukacha from "../../Assets/pasta_2.jpg";

const Dish = ({ closeDish }) => (
  <div className="dishContainer" onClick={closeDish}>
    <div className="dishView">
      <img
        onClick={closeDish}
        className="closeDish"
        src={close}
        alt="close"
      ></img>

      <div className="info">
        <span className="name">פוקאצ׳ה שרי</span>
      </div>
      <img className="dishImg" src={fukacha} alt="dish"></img>
    </div>
  </div>
);

export default Dish;
