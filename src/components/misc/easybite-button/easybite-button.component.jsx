import React from "react";

import "./easybite-button.styles.scss";

const EasybiteButton = ({ children, onClick }) => (
  <div className="containerDiv">
    <button className="addToCart" onClick={onClick}>
      {children}
    </button>
  </div>
);

export default EasybiteButton;
