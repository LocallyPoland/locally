import axios from "axios";

const _axios = axios.create({
  baseURL: "https://locally.com.pl/api/v1",
});

export default _axios;
