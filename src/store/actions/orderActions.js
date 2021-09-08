import { deleteOrder, postOrder } from "../api/api";
import { store } from "../store";
import { DELETE_HISTORY_ITEM } from "./actionTypes";

export const createOrderAction = (order, token) => {
  return async (dispatch) => {
    const response = await postOrder(order, token);
    console.log("response ===", response?.data);
    return response?.status === 200;
  };
};

export const cancelOrderAction = (orderId) => {
  return async (dispatch) => {
    try {
      const { token } = store.getState().profile;
      console.log("token ===", token);
      const response = await deleteOrder(orderId, token);
      console.log("create order response ===", response?.data);
      dispatch({ type: DELETE_HISTORY_ITEM, orderId });
    } catch (e) {
      console.log("cancelOrderAction e ===", e);
    }
  };
};
