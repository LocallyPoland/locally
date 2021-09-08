import {
  facebookLoginRequest,
  loginRequest,
  patchUser,
  registerRequest,
  changePasswordRequest,
  sendCodeRequest,
  fetchUser,
} from "../api/api";
import { ADD_CARD, CLEAR_USER, SET_USER } from "./actionTypes";
import { store } from "../store";

export const registerAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await registerRequest(data);
      const { user = {}, token } = response.data;
      console.log("got token ===", token);
      console.log("response ===", response.status);
      dispatch({ type: SET_USER, user: { ...user, token } });
      return true;
    } catch (e) {
      return false;
    }
  };
};

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      const {
        profile: { token },
      } = store.getState();
      const response = await fetchUser(token);
      const user = response.data;
      console.log("user ===", user);
      console.log("token ===", token);
      if (user) {
        dispatch({
          type: SET_USER,
          user: { ...user, token },
        });
      } else {
        throw new Error("no user");
      }
      return user?.isVerified;
    } catch (e) {
      console.log("getUserAction err ===", e);
      return false;
    }
  };
};

export const loginAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await loginRequest(data);
      console.log("response data ===", response?.data);
      const { user, token } = response.data;
      dispatch({ type: SET_USER, user: { ...user, token } });
      return true;
    } catch (e) {
      console.log("loginAction err ===", e);
      return false;
    }
  };
};

export const facebookLoginAction = (user) => {
  return async (dispatch) => {
    console.log("facebook login action");
    return facebookLoginRequest(user)
      .then((res) => {
        const { user, token } = res.data;
        console.log("user ===", user);
        console.log("token ===", token);
        dispatch({ type: SET_USER, user: { ...user, token } });
        return true;
      })
      .catch((e) => {
        console.log("facebook login error ===", e);
        return false;
      });
  };
};

export const editUserAction = (data, token) => {
  return async (dispatch) => {
    const response = await patchUser(data, token);
    if (response.status === 200) {
      dispatch({ type: SET_USER, user: data });
    }
    return response.status === 200;
  };
};

export const logoutAction = () => {
  return {
    type: CLEAR_USER,
  };
};

export const changePasswordAction = (email, password, code) => {
  return async (dispatch) => {
    console.log("here");
    return changePasswordRequest({ email, password, code })
      .then((res) => {
        console.log("res ===", res.data);
        // if (res?.status === 200) {
        //   dispatch({ type: SET_USER, user: res.data.user });
        // }
        return true;
      })
      .catch((err) => {
        console.log("changePasswordAction err ===", err);
        return false;
      });
  };
};

export const sendVerificationCodeAction = (email) => {
  return async (dispatch) => {
    const response = await sendCodeRequest({ email });
    return response?.status === 200;
  };
};
