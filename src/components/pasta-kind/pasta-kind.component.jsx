import React from "react";

import "./pasta-kind.styles.scss";

const PastaKind = ({ name, price, imageUrl, isActive }) => (
  <div className={`${isActive ? "active" : ""} pastaKind`}>
    <div className="text">
      <span>{name}</span>
      <span>{price !== 0 ? `${price}₪` : ""}</span>
    </div>
    <img src={"../../Assets" + imageUrl} alt=""></img>
  </div>
);

export default PastaKind;
