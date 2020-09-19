import { ADD_CARD, EDIT_CARD, REMOVE_CARD } from "./actionTypes";

export const addCardAction = (card) => {
  return {
    type: ADD_CARD,
    card,
  };
};

export const removeCardAction = (id) => {
  return {
    type: REMOVE_CARD,
    id,
  };
};

export const editCardAction = (card) => {
  return {
    type: EDIT_CARD,
    card,
  };
};
