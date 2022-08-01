import { http } from "@/api";

const URLS = {
  fetchGoods: "data",
  fetchNames: "names",
};

export const fetchGoods = (params) => http.get(URLS.fetchGoods, params);

export const fetchNames = (params) => http.get(URLS.fetchNames, params);

export const fetchProducts = () => {
  return Promise.all([fetchGoods(), fetchNames()]);
};
