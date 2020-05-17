import React from "react";

import { connect } from "react-redux";

import TableDish from "../table-dish/table-dish.component";
import BottomControls from "../bottom-controls/bottom-controls.component";

import "./order-view.styles.scss";

class OrderView extends React.Component {
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
      return (
        <div className="order-view">
          <h1 className="order-id">הזמנה מספר {id}</h1>
          <div className="dishes">
            {dishes.map(({ id, dish }) => (
              <TableDish key={id} {...dish} isOrder={true}></TableDish>
            ))}
          </div>
          <span className="price">מחיר כולל: {totalPrice}₪</span>
          <BottomControls className="bottom-controls" />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ order: { dishes, totalPrice, id } }) => ({
  dishes,
  totalPrice,
  id,
});

export default connect(mapStateToProps)(OrderView);
