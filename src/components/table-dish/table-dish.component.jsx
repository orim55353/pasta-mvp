import React from "react";
import "./table-dish.styles.scss";

const TableDish = ({ img, name, description, price }) => (
  <div className="tableDish">
    <img src={img} alt="dish"></img>
    <div className="text">
      <span className="name">{name}</span>
      <span className="description">{description}</span>
      <div className="rating">
        <span className="rate">4.2</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆</span>
      </div>
    </div>
    <div className="stats">
      <span>☆</span>
      <span>☆</span>
      <span>☆</span>
      <span>☆</span>
      <span>☆</span>
    </div>
    <span className="price">{price}₪</span>
  </div>
);

export default TableDish;
