import React from "react";

import "./bottom-controls.styles.scss";

import { ReactComponent as CartIcon } from "../../Assets/cart.svg";

const BottomControls = () => (
  <div className="bottom-controls">
    <button>המומלצים</button>
    <button>צור שולחן חדש</button>
    <button>חזור לתפריט</button>
    <button>עבור לשלב הבא</button>
    <button>צפה בהזמנה</button>

    <div className="cart">
      <CartIcon className="cart-icon"></CartIcon>
      <span>(4)</span>
    </div>
  </div>
);

export default BottomControls;
