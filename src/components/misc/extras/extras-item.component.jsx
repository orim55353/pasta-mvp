import React from "react";

import "./extras-item.styles.scss";

const ExtrasItem = ({ name, price, isActive }) => (
  <div className={`${isActive ? "active" : ""} extra`}>
    <div className="text">
      <span>{name}</span>
      <span>{price !== 0 ? `${price}₪` : ""}</span>
    </div>
  </div>
);

export default ExtrasItem;
