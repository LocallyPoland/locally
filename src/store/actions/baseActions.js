import { HIDE_MODAL, SET_SETTINGS, SHOW_MODAL } from "./actionTypes";
import { LayoutAnimation } from "react-native";
import { fetchSettings } from "../api/api";
import { store } from "../store";
import { checkAppDisabled } from "../../utils/utils";

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

export const showModalErrorAction = () => {
  LayoutAnimation.configureNext({
    ...LayoutAnimation.Presets.spring,
    duration: 150,
  });
  const { timeStart, timeStop } = store.getState().base.settings;
  const { isTimeEarly, isSwitcher } = checkAppDisabled(true);
  return {
    type: SHOW_MODAL,
    title: "Błąd zamówienia",
    desc: "W tej chwili Locally nie przyjmuje zamówień.",
    //   isSwitcher
    // ? "W tej chwili Locally nie przyjmuje zamówień."
    // : `W tej chwili Locally nie przyjmuje zamówień. Aplikacja wznowi pracę o ${
    //     !isTimeEarly ? timeStart : timeStop
    //   } godzinie`,
  };
};

export const getSettingsAction = () => {
  return async (dispatch) => {
    fetchSettings().then((res) => {
      console.log("options ===", res.data);
      const { timeStart, timeStop, switcher } = res.data;
      const hours = new Date().getHours();
      const isError = timeStart > hours || timeStop < hours || switcher;
      dispatch({ type: SET_SETTINGS, settings: { ...res.data, isError } });
    });
  };
};
