import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./bottom-controls.styles.scss";

import { ReactComponent as CartIcon } from "../../Assets/cart.svg";

const BottomControls = ({ dishes }) => (
  <div className="bottom-controls">
    <button>המומלצים</button>
    <button>צור שולחן חדש</button>
    <Link className="back" to="/">
      <button>חזור לתפריט</button>
    </Link>
    <Link className="cart" to="/order">
      <div className="cart">
        <CartIcon className="cart-icon"></CartIcon>
        <span>({dishes.length})</span>
      </div>
    </Link>
  </div>
);

const mapStateToProps = ({ order: { dishes } }) => ({
  dishes,
});

export default connect(mapStateToProps)(BottomControls);
