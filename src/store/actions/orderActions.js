import { postOrder } from "../api/api";

export const createOrderAction = (order, token) => {
  return async (dispatch) => {
    const response = await postOrder(order, token);
    console.log("response ===", response?.data);
    return response?.status === 200;
  };
};
