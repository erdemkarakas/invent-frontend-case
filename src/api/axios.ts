import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apikey: "7344e6a4",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
