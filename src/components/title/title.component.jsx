import React from "react";

import "./title.styles.scss";

const Title = ({ title, img }) => (
  <div className="title">
    <img className="title" src={"../../Assets" + img} alt=""></img>
    <span>{title}</span>
  </div>
);
export default Title;
