import { combineReducers } from "redux";

import orderReducer from "./order/order.reducer";
import pastaReducer from "./pasta/pasta.reducer";
import menuReducer from "./menu/menu.reducer";

export default combineReducers({
  order: orderReducer,
  pasta: pastaReducer,
  menu: menuReducer,
});
