import React from "react";

import "./order-dish.styles.scss";

import { storage } from "../../../firebase/firebase.utils";
import { deleteDish } from "../../../redux/order/order.action";
import { connect } from "react-redux";

class OrderDish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadUrl: "",
      ...this.props,
    };
  }

  componentDidMount() {
    let currentComponent = this;
    var imgRef = storage.child(`${"dishes/" + this.state.dish.imageUrl}`);
    imgRef.getDownloadURL().then(function (url) {
      currentComponent.setState({ downloadUrl: url });
    });
  }

  handleDeleteDish() {
    this.props.deleteDish(this.state.dish);
    this.props.parent.forceUpdate();
  }

  render() {
    const { comment, dishExtras, handleEdit, dish } = this.state;
    const { name, description, price } = dish;

    var extrasString = [];
    var extrasPrice = 0;

    this.props.extras.forEach((extra) => {
      if (dishExtras.includes(extra.id)) {
        extrasString.push(extra.name);
        extrasPrice += extra.price;
      }
    });

    return (
      <div className="orderDish">
        <div className="image">
          <img src={this.state.downloadUrl} alt="dish"></img>
          <button
            className="delete-btn"
            onClick={() => this.handleDeleteDish()}
          >
            מחק
          </button>
        </div>
        <div className="text">
          <span className="name">{name}</span>
          <span className="description">{description}</span>
          <span className="extras">תוספות: {extrasString.join(", ")}</span>
          <span className="comment">הערות: {comment}</span>
        </div>
        <div className="prices">
          <span className="price">{price}₪</span>
          {extrasPrice > 0 ? (
            <span className="extrasPrice">+ {extrasPrice}₪</span>
          ) : null}
        </div>
        <button
          className="edit"
          onClick={() => handleEdit(dish, comment, dishExtras)}
        >
          עריכה
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ menu: { extras } }) => ({
  extras,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDish: (dish) => dispatch(deleteDish(dish)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDish);
