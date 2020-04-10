import React from "react";
import Fade from "react-reveal/Fade";

import "./dish.styles.scss";

import close from "../../Assets/close_white.png";

import UserReview from "./userReview/user-review.component";

const Dish = ({ closeDish, dishData }) => (
  <Fade>
    <div className="dishContainer">
      <div className="dishView">
        <div className="display">
          <img
            onClick={closeDish}
            className="closeDish"
            src={close}
            alt="close"
          ></img>
          <div className="info">
            <span className="name">{dishData.name}</span>
            <span className="price">{dishData.price}₪</span>
            <span className="description">{dishData.description}</span>
            <div className="rating">
              <span className="rate">{dishData.rating}</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆</span>
            </div>
          </div>
          <button className="addToCart">הוסף להזמנה</button>
          <img
            className="dishImg"
            src={"../../Assets" + dishData.imageUrl}
            alt="dish"
          ></img>
        </div>
        <div className="userImages">
          <span>תמונות גולשים:</span>
          <UserReview></UserReview>
        </div>
        <div className="recommendations">
          <span>המלצות נוספות:</span>
        </div>
      </div>
    </div>
  </Fade>
);

export default Dish;
