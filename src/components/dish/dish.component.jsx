import React from "react";
import Fade from "react-reveal/Fade";

import "./dish.styles.scss";

import closeWhite from "../../Assets/close_white.png";
import closeBlack from "../../Assets/close_black.png";

import UserReview from "./userReview/user-review.component";

const Dish = ({ closeDish, dishData }) => (
  <Fade>
    <div className="dishContainer">
      <div className="dishView">
        <div className="display">
          <img
            onClick={closeDish}
            className="closeDish white"
            src={closeWhite}
            alt="close"
          ></img>
          <img
            onClick={closeDish}
            className="closeDish black"
            src={closeBlack}
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
