import OrderActionTypes from "./order.types";

import {
  addItemToOrder,
  updateDish,
  deleteDish,
  getTotalPrice,
} from "./order.utils";

const INITAL_STATE = {
  id: Math.floor(1000 + Math.random() * 9000),
  dishes: [],
  drinks: [],
  totalPrice: 0,
  customer: "default",
  menuExtras: [],
};

const orderReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ADD_DISH:
      return {
        ...state,
        dishes: addItemToOrder(state.dishes, action.payload),
        totalPrice: getTotalPrice(state.dishes, state.menuExtras),
      };

    case OrderActionTypes.UPDATE_DISH:
      return {
        ...state,
        dishes: updateDish(state.dishes, action.payload),
        totalPrice: getTotalPrice(state.dishes, state.menuExtras),
      };

    case OrderActionTypes.DELETE_DISH:
      return {
        ...state,
        dishes: deleteDish(state.dishes, action.payload),
        totalPrice: getTotalPrice(state.dishes, state.menuExtras),
      };

    case OrderActionTypes.SET_EXTRAS:
      return {
        ...state,
        menuExtras: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
