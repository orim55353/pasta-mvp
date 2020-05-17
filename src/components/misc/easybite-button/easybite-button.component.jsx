import React from "react";

import "./easybite-button.styles.scss";

const EasybiteButton = ({ children, onClick }) => (
  <button className="addToCart" onClick={onClick}>
    {children}
  </button>
);

export default EasybiteButton;
