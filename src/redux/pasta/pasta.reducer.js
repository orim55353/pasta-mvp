import PastaActionTypes from "./pasta.types";

const INITAL_STATE = {
  chosen_pasta: null,
};

const pastaReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case PastaActionTypes.CHOOSE_PASTA:
      return {
        ...state,
        chosen_pasta: action.payload,
      };
    default:
      return state;
  }
};

export default pastaReducer;
