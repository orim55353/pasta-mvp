import React from "react";

import "./title.styles.scss";

const Title = ({ title, img }) => (
  <div className="title">
    <img className="title" src={img} alt="logo"></img>
    <span>{title}</span>
  </div>
);
export default Title;
