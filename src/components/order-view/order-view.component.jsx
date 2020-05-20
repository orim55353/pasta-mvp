import React from "react";

import { connect } from "react-redux";

import OrderDish from "./order-dish/order-dish.component";
import BottomControls from "../bottom-controls/bottom-controls.component";
import AddToCart from "../dish/addToCart/addToCart.component";

import "./order-view.styles.scss";

class OrderView extends React.Component {
  constructor() {
    super();

    this.state = {
      showingDish: false,
      dish: null,
      dishComment: "",
      dishExtras: [],
    };

    this.handleAcceptOrder = this.handleAcceptOrder.bind(this);
    this.handleEditDish = this.handleEditDish.bind(this);
    this.handleBackFromEdit = this.handleBackFromEdit.bind(this);
  }

  handleAcceptOrder() {
    console.log(this.props.dishes);
    window.localStorage.clear();
    window.location.reload();
  }

  handleEditDish(dish, comment, extras) {
    this.setState({
      showingDish: true,
      dish: dish,
      dishComment: comment,
      dishExtras: extras,
    });
  }

  handleBackFromEdit() {
    this.setState({
      showingDish: false,
      dish: null,
      dishComment: "",
      dishExtras: [],
    });
  }

  render() {
    const { dishes, totalPrice, id } = this.props;

    if (dishes.length === 0) {
      return (
        <div className="order-empty">
          <h1>ההזמנה ריקה כרגע</h1>
          <BottomControls className="bottom-controls" />
        </div>
      );
    } else {
      if (this.state.showingDish) {
        return (
          <div className="ordersContainer">
            <div className="editDish">
              <AddToCart
                show={this.state.showingDish}
                dish={this.state.dish}
                handleBack={this.handleBackFromEdit}
                comment={this.state.dishComment}
                newExtras={this.state.dishExtras}
              ></AddToCart>
            </div>
          </div>
        );
      } else {
        return (
          <div className="ordersContainer">
            <div className="order-view">
              <h1 className="order-id">הזמנה מספר {id}</h1>
              <div className="dishes">
                {dishes.map(({ id, dish, comment, extras }) => (
                  <OrderDish
                    key={id}
                    dish={dish}
                    comment={comment}
                    dishExtras={extras}
                    handleEdit={this.handleEditDish}
                    parent={this}
                  ></OrderDish>
                ))}
              </div>
              <span className="totalPrice">מחיר כולל: {totalPrice}₪</span>
              <button
                className="acceptOrder"
                onClick={() => this.handleAcceptOrder()}
              >
                הזמן!
              </button>

              <BottomControls className="bottom-controls" />
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = ({ order: { dishes, totalPrice, id } }) => ({
  dishes,
  totalPrice,
  id,
});

export default connect(mapStateToProps)(OrderView);
