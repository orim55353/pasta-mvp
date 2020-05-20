import OrderActionTypes from "./order.types";

export const addItem = (item) => ({
  type: OrderActionTypes.ADD_DISH,
  payload: item,
});

export const deleteDish = (item) => ({
  type: OrderActionTypes.DELETE_DISH,
  payload: item,
});

export const updatedDish = (item) => ({
  type: OrderActionTypes.UPDATE_DISH,
  payload: item,
});

export const setOrderExtras = (extras) => ({
  type: OrderActionTypes.SET_EXTRAS,
  payload: extras,
});
