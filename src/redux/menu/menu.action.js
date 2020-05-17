import MenuActionTypes from "./menu.types";

export const setData = (data) => ({
  type: MenuActionTypes.SET_DATA,
  payload: data,
});

export const setExtras = (extras) => ({
  type: MenuActionTypes.SET_EXTRAS,
  payload: extras,
});
