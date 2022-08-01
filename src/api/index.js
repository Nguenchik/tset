import axios from "axios";

export const baseURL = process.env.VUE_APP_URL_API;

const http = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error;
  }
);

export { http };
