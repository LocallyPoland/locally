import {
  ADD_PLACE,
  DELETE_PLACE,
  EDIT_PLACE,
  SET_PLACES,
} from "../actions/actionTypes";

const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return { ...state, all: action.places };
    case ADD_PLACE:
      return { ...state, all: [...state.all, action.place] };
    case DELETE_PLACE:
      return {
        ...state,
        all: state.all.filter((place) => place._id !== action.id),
      };
    case EDIT_PLACE:
      return {
        ...state,
        all: state.all.map((place) => {
          console.log("place ===", place._id);
          console.log("action place ===", action.place._id);
          return place._id !== action.place._id ? place : action.place;
        }),
      };
    default:
      return state;
  }
};
