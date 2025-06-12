import axios from "axios";
import type { LoginCredentials, AuthResponse } from "../types";
import { API_URL, ENDPOINTS } from "../constants/endpoints";
import { ERRORS } from "../constants/errors";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, {
      username: credentials.username,
      password: credentials.password,
      expiresInMins: 30,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || ERRORS.AUTH.INVALID_CREDENTIALS
      );
    }
    throw new Error(ERRORS.AUTH.UNKNOWN_ERROR);
  }
};

export const getCurrentUser = async (token: string): Promise<AuthResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.AUTH.ME, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || ERRORS.AUTH.TOKEN_NOT_FOUND
      );
    }
    throw new Error(ERRORS.AUTH.UNKNOWN_ERROR);
  }
};

export const setupAuthInterceptor = (getToken: () => string | null) => {
  apiClient.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
