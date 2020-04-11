import React from "react";

import "./sauce-selection.styles.scss";
import closeWhite from "../../Assets/close_white.png";

import Fade from "react-reveal/Fade";

const SauceSelection = ({ handleClose }) => (
  <Fade>
    <div className="sauceContainer">
      <div className="sauceSelection">
        <img
          onClick={handleClose}
          className="closeSelection white"
          src={closeWhite}
          alt="close"
        ></img>

        <div className="info">
          <span className="step">2</span>
          <span className="description">בוחרים את הרוטב</span>
        </div>
      </div>
    </div>
  </Fade>
);
export default SauceSelection;
