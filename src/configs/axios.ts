import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // nếu dùng cookie
});

// Thêm token từ localStorage (chạy phía client)
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    // const token = localStorage.getItem("token");
    // if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
  return config;
});

export default axiosInstance;
