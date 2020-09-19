import { HIDE_MODAL, SHOW_MODAL } from "./actionTypes";
import { LayoutAnimation } from "react-native";

export const hideModalAction = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const showModalAction = (
  title,
  desc,
  onClose = () => {},
  onResolve,
  onReject
) => {
  LayoutAnimation.configureNext({
    ...LayoutAnimation.Presets.spring,
    duration: 150,
  });
  return {
    type: SHOW_MODAL,
    title,
    desc,
    onClose,
    onResolve,
    onReject,
  };
};
