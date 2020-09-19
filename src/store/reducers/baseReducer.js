import { SHOW_MODAL, HIDE_MODAL } from "../actions/actionTypes";

const initialState = {
  modal: {
    title: "",
    desc: "",
    isVisible: false,
    onClose: () => {},
    onReject: () => {},
    onResolve: () => {},
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

    default:
      return state;
  }
};
