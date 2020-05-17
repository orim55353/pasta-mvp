import MenuActionTypes from "./menu.types";

const INITAL_STATE = {
  sections: [],
  extras: [],
};

const menuReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.SET_DATA:
      return {
        ...state,
        sections: action.payload,
      };
    case MenuActionTypes.SET_EXTRAS:
      return {
        ...state,
        extras: action.payload,
      };

    default:
      return state;
  }
};

export default menuReducer;
