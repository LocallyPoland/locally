import { store } from "../store";
import { SET_HISTORY } from "./actionTypes";
import { fetchHistory } from "../api/api";

export const getHistoryAction = () => {
  return async (dispatch) => {
    const { token } = store.getState().profile;
    fetchHistory(token)
      .then((res) => {
        console.log("history res ===", res?.data);
        dispatch({
          type: SET_HISTORY,
          history: res.data,
        });
      })
      .catch(console.error);
  };
};
