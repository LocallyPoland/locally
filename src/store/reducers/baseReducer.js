import { SHOW_MODAL, HIDE_MODAL, SET_SETTINGS } from "../actions/actionTypes";

const initialState = {
  modal: {
    title: "",
    desc: "",
    isVisible: false,
    onClose: () => {},
    onReject: () => {},
    onResolve: () => {},
  },
  settings: {
    isError: false,
    price: 0,
    priceForCustomer: 0,
    switcher: false,
    timeStart: null,
    timeStop: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isVisible: true,
          title: action.title,
          desc: action.desc,
          onClose: action.onClose,
          onReject: action.onReject,
          onResolve: action.onResolve,
        },
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: { ...state.modal, isVisible: false, title: "", desc: "" },
      };

    case SET_SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };

    default:
      return state;
  }
};
