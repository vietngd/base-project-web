import axios from "@/configs/axios";
import type { LoginResponse } from "@/types/auth";

export const login = (email: string, password: string) =>
  axios.post<LoginResponse>("/auth/login", { email, password });

export const getProfile = () => axios.get("/auth/profile");
