import OrderActionTypes from "./order.types";

import { addItemToOrder } from "./order.utils";
import { getTotalPrice } from "./order.utils";

const INITAL_STATE = {
  id: 0,
  dishes: [],
  drinks: [],
  totalPrice: 0,
  customer: "default",
};

const orderReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ADD_DISH:
      return {
        ...state,
        id: Math.floor(1000 + Math.random() * 9000),
        dishes: addItemToOrder(state.dishes, action.payload),
      };

    default:
      return state;
  }
};

export default orderReducer;
