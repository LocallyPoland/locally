import _axios from "./_axios";

export const registerRequest = (data) => {
  return _axios.post("/register", data);
};

export const loginRequest = (data) => {
  return _axios.post("/login", data);
};

export const facebookLoginRequest = (data) => {
  return _axios.post("/fb", data);
};

export const fetchUser = (token) => {
  return _axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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

export const sendCodeRequest = (data) => {
  return _axios.post(`/restore/password`, data).catch((e) => e.response);
};

export const changePasswordRequest = (data) => {
  return _axios.post("/change/password", data);
};

export const postOrder = (order, token) => {
  return _axios.post("/order", order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteOrder = (orderId, token) => {
  return _axios.delete(`/order/${orderId}`, {
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
