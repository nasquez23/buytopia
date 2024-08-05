import axios from "axios";
import { User } from "../types/types";

export const getUsers = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);

  return data;
};

export const getUserById = async (id: number) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${id}`
  );

  return data;
};

export const addUser = async (user: User) => {
  const { id, ...userWithoutId } = user;
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/users/create`,
    userWithoutId
  );

  return data;
};

export const updateUser = async (user: User) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_API_URL}/users/update/${user.id}`,
    user
  );

  return data;
};

export const deleteUser = async (id: number) => {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_API_URL}/users/delete/${id}`
  );

  return data;
};
