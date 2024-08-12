import { axiosInstance } from "../axios/axios";
import { AuthRequest } from "../types/types";

export const login = async ({ email, password }: AuthRequest) => {
  const response = await axiosInstance.post("/auth/login", {
    email,
    password,
  });

  if (response.status !== 200) {
    throw new Error("Failed to login");
  }
};

export const register = async ({ name, email, password }: AuthRequest) => {
  const response = await axiosInstance.post("/auth/register", {
    name,
    email,
    password,
  });

  if (response.status !== 200) {
    throw new Error("Failed to register");
  }
};

export const fetchUser = async () => {
  const response = await axiosInstance.get("/users/profile");

  return response.data;
};
