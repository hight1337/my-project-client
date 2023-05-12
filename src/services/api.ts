import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Create an instance of Axios
const $api: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

// Request interceptor
// ------------------
// We are using the request interceptor to add the access token to the Authorization header
// so that we don't have to attach it to every request

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
    // Get the access token from local storage
    const accessToken: string = "your-access-token";

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
      originalRequest._retry = true;
      try {
        // 1.Sent the request to refresh the access token
        // 2.Update outdated access token with the new one from the response

        //Retry the original request
        return $api(originalRequest);
      } catch (_error) {
        // If refreshing the access token fails, we logout the user
        return Promise.reject(_error);
      }
    }

    // If the error status is not 401, we just reject with the error
    return Promise.reject(error);
  }
);
