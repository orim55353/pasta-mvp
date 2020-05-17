import OrderActionTypes from "./order.types";

export const addItem = (item) => ({
  type: OrderActionTypes.ADD_DISH,
  payload: item,
});
