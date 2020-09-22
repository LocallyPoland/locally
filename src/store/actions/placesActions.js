import { deletePlace, getPlaces, patchPlace, postPlace } from "../api/api";
import { store } from "../store";
import { ADD_PLACE, DELETE_PLACE, EDIT_PLACE, SET_PLACES } from "./actionTypes";

export const createPlaceAction = (place, onReject) => {
  return async (dispatch) => {
    const {
      profile: { token },
    } = store.getState();
    console.log("token ===", token);
    return postPlace(place, token)
      .then((response) => {
        dispatch({ type: ADD_PLACE, place: response.data });
        return true;
      })
      .catch((e) => {
        onReject();
        return false;
      });
    console.log("is success ===", isSuccess);
  };
};

export const deletePlaceAction = (id) => {
  return async (dispatch) => {
    const {
      profile: { token },
    } = store.getState();
    const response = await deletePlace(id, token);
    if (response?.status === 200) {
      dispatch({ type: DELETE_PLACE, id });
    }
    return response?.status === 200;
  };
};

export const editPlaceAction = (place, id) => {
  return async (dispatch) => {
    const {
      profile: { token },
    } = store.getState();
    const response = await patchPlace(place, id, token);
    console.log("edit place response ===", response?.data);
    if (response?.status === 200) {
      dispatch({ type: EDIT_PLACE, place: response?.data });
    }
    return response?.status === 200;
  };
};

export const getPlacesAction = () => {
  return async (dispatch) => {
    const {
      profile: { token, _id },
    } = store.getState();
    const response = await getPlaces(_id, token);
    if (response?.data) {
      dispatch({ type: SET_PLACES, places: response.data });
    }
    return response?.status === 200;
  };
};
