import { ADD_CARD, SET_USER, CLEAR_USER } from "../actions/actionTypes";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  balance: 420.79,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user,
      };
    case CLEAR_USER:
      return {
        fName: "",
        lName: "",
        email: "",
        phone: "",
        balance: 0,
        cards: [],
      };
    default:
      return state;
  }
};
