import React from "react";

import "./category-tab.styles.scss";

const CategoryTab = ({ name, description, direction }) => (
  <div className="main">
    <div className={`${direction} tab`}>
      <span className="category">{name}</span>
      <span className="description">{description}</span>
    </div>
  </div>
);

export default CategoryTab;
