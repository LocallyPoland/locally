import axios from "axios";

const _axios = axios.create({
  baseURL: "https://locally-pl.herokuapp.com/api/v1",
});

export default _axios;
