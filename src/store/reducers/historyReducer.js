import { DELETE_HISTORY_ITEM, SET_HISTORY } from "../actions/actionTypes";

const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        all: action.history,
      };
    case DELETE_HISTORY_ITEM:
      return {
        ...state,
        all: state.all.filter((item) => item._id !== action.orderId),
      };
    default:
      return state;
  }
};
