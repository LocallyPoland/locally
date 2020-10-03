import { HIDE_MODAL, SET_SETTINGS, SHOW_MODAL } from "./actionTypes";
import { LayoutAnimation } from "react-native";
import { fetchSettings } from "../api/api";

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

export const getSettingsAction = () => {
  return async (dispatch) => {
    fetchSettings().then((res) => {
      dispatch({ type: SET_SETTINGS, settings: res.data });
    });
  };
};
