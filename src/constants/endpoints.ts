export const API_URL = import.meta.env.VITE_API_URL || "https://dummyjson.com";

export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    ME: "/auth/me",
  },
  PRODUCTS: {
    GET: "/products",
    GET_BY_ID: "/products/",
    GET_CATEGORIES: "/products/categories",
    GET_CATEGORY_LIST: "/products/categories/list",
    GET_BY_CATEGORY: "/products/category/",
    SEARCH: "/products/search",
    SEARCH_BY_CATEGORY: "/products/search/",
  },
};
