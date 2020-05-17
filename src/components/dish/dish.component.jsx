import React from "react";
import Fade from "react-reveal/Fade";

import "./dish.styles.scss";

import { storage } from "../../firebase/firebase.utils";

import closeWhite from "../../Assets/close_white.png";
import closeBlack from "../../Assets/close_black.png";

import UserReview from "./userReview/user-review.component";
import AddToCart from "./addToCart/addToCart.component";
import EasybiteButton from "../misc/easybite-button/easybite-button.component";

class Dish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addedToCart: false,
      downloadUrl: "",
    };

    this.proceedAdding = this.proceedAdding.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  proceedAdding() {
    this.setState({ addedToCart: true });
  }

  handleBack(didClose) {
    this.setState({ addedToCart: false });
    if (didClose === true) {
      this.props.closeDish();
    }
  }

  componentDidMount() {
    let currentComponent = this;
    var imgRef = storage.child(`${"dishes/" + this.props.dishData.imageUrl}`);
    imgRef.getDownloadURL().then(function (url) {
      currentComponent.setState({ downloadUrl: url });
    });
  }

  render() {
    const { closeDish, dishData } = this.props;
    return (
      <Fade>
        <div className="dishContainer">
          <AddToCart
            className="addToCart"
            show={this.state.addedToCart}
            dish={dishData}
            handleBack={this.handleBack}
          ></AddToCart>
          <div
            className={`dishView ${
              this.state.addedToCart === false ? "show" : "hide"
            }`}
          >
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
                {/* <div className="rating">
                  <span className="rate">{dishData.rating}</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div> */}
              </div>
              <EasybiteButton onClick={this.proceedAdding}>
                הוסף להזמנה
              </EasybiteButton>
              <img
                className="dishImg"
                src={this.state.downloadUrl}
                alt="dish"
              ></img>
            </div>
            {/* <div className="userImages">
              <span>תמונות גולשים:</span>
              <UserReview></UserReview>
            </div> */}
            <div className="recommendations">
              <span>המלצות נוספות:</span>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Dish;
