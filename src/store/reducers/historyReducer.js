import { SET_HISTORY } from "../actions/actionTypes";

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
    default:
      return state;
  }
};
