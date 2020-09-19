import { ADD_CARD, EDIT_CARD, REMOVE_CARD } from "../actions/actionTypes";

const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        all: [...state.all, action.card],
      };
    case REMOVE_CARD:
      return {
        ...state,
        all: state.all.filter((card) => card.id !== action.id),
      };
    case EDIT_CARD:
      return {
        ...state,
        all: state.all.map((card) =>
          card.id === action.card.id ? action.card : card
        ),
      };
    default:
      return state;
  }
};
