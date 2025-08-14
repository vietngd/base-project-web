import axios from "@/configs/axios";

export const getUsers = (params?: Record<string, string>) =>
  axios.get("/users", { params });
