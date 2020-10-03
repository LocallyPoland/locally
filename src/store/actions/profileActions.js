import {
  facebookLoginRequest,
  loginRequest,
  patchUser,
  registerRequest,
} from "../api/api";
import { ADD_CARD, CLEAR_USER, SET_USER } from "./actionTypes";

export const registerAction = (user) => {
  return async (dispatch) => {
    const response = await registerRequest(user);
    if (response.status === 200) {
      dispatch({ type: SET_USER, user });
    }
    return response.status === 200;
  };
};

export const loginAction = (data) => {
  return async (dispatch) => {
    const response = await loginRequest(data);
    console.log("response ===", response?.data);
    if (response.status === 200) {
      const { user, token } = response.data;
      console.log("user ===", response.data.user);
      dispatch({ type: SET_USER, user: { ...user, token } });
    } else {
      dispatch({ type: SET_USER, user: {} });
    }
    return response.status === 200;
  };
};

export const facebookLoginAction = (user) => {
  return async (dispatch) => {
    return facebookLoginRequest(user)
      .then((res) => {
        const { user, token } = response.data;
        console.log("user ===", response.data.user);
        dispatch({ type: SET_USER, user: { ...user, token } });
        return true;
      })
      .catch((e) => false);
  };
};

export const editUserAction = (data, token) => {
  return async (dispatch) => {
    const response = await patchUser(data, token);
    console.log("response ===", response);
    console.log("response status ===", response.status);
    if (response.status === 200) {
      console.log("user ===", response.data.user);
      dispatch({ type: SET_USER, user: response.data.user });
    }
    return response.status === 200;
  };
};

export const logoutAction = () => {
  return {
    type: CLEAR_USER,
  };
};

export const restorePasswordAction = (password, userId) => {
  return async (dispatch) => {
    const response = await restorePasswordAction(password, userId);
    console.log("response ===", response?.data);
  };
};
