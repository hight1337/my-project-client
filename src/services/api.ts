import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
// constants
import { USER_ACCESS_TOKEN } from "constants/local-sorage";
// utils
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  setItemToLocalStorage,
} from "utils/local-storage";
import { refreshTokens } from "./auth";
import { logOut } from "./user";
import { showErrorNotification } from "utils/notifications";

let isRefreshing = false;
// Create an instance of Axios
const $api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptor
// ------------------
// We are using the request interceptor to add the access token to the Authorization header
// so that we don't have to attach it to every request

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
    // Get the access token from local storage
    const accessToken: string | null =
      getItemFromLocalStorage(USER_ACCESS_TOKEN);
    if (!accessToken) {
      return config;
    }
    // Attach the access token to the Authorization header
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
// -------------------
// We are using the response interceptor to catch 401 Unauthorized errors, to refresh the access token with the refresh token that BE attaches to the cookies
// and then to retry the original request. If the refresh token is expired, the user is logged out.

$api.interceptors.response.use(
  // If the request succeeds, we don't have to do anything and just return the response
  (response: AxiosResponse) => {
    return response;
  },
  // If the request fails, we use the refresh token to get a new access token and retry the original request.
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    // Check if the response status is 401 (Unauthorized) and if the original request has not already been retried
    if (error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const response = await refreshTokens();
          setItemToLocalStorage(USER_ACCESS_TOKEN, response.accessToken);
          const retryOriginalRequest = await $api(originalRequest);
          isRefreshing = false;
          return retryOriginalRequest;
        } catch (refreshError: any) {
          isRefreshing = false;
          if (refreshError.response.status === 401) {
            showErrorNotification(
              "Your session has expired. Please log in again."
            );
            removeItemFromLocalStorage(USER_ACCESS_TOKEN);
            await logOut();
            return Promise.reject(refreshError);
          }
        }
      }
    }
    // If the error status is not 401, we just reject with the error
    return Promise.reject(error);
  }
);

export default $api;
