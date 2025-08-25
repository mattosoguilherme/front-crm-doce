import axios from "axios";
import nProgress from "nprogress";
import { toast } from "react-toastify";

const AxiosInstance = axios.create({
  baseURL: "https://crm-dtl.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use((config) => {
  nProgress.start();
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    nProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    const status = error?.response?.status;
    const message = error?.response?.message || "Erro inesperado";

    toast.error(`Erro ${status || ""} ${message}`);

    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

axiosRetry(AxiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkError(error) || axiosRetry.isRetryableError(error)
    );
  },
});

export default AxiosInstance;
