import axios, { InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers["Authorization"] = `${process.env.REACT_APP_AUTH_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
