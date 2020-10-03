import _axios from "./_axios";

export const registerRequest = (data) => {
  return _axios.post("/register", data).catch((e) => e.response);
};

export const loginRequest = (data) => {
  return _axios.post("/login", data).catch((e) => e.response);
};

export const facebookLoginRequest = (data) => {
  return _axios.post("/fb", data).catch((e) => e.response);
};

export const patchUser = (data, token) => {
  return _axios
    .patch("/user", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => e.response);
};

export const fetchSettings = () => {
  return _axios.get("/settings");
};

export const restorePasswordRequest = (password, userId) => {
  return _axios.patch(`/user/restore/${userId}`);
};

export const postOrder = (order, token) => {
  return _axios.post("/order", order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchHistory = (token) => {
  return _axios.get("/user/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postPlace = (place, token) => {
  return _axios.post("/address", place, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePlace = (id, token) => {
  return _axios.delete(`/address/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const patchPlace = (place, id, token) => {
  return _axios.patch(`/address/${id}`, place, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPlaces = (id, token) => {
  return _axios.get(`/user/address`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
