import axios from "axios";
import { Product } from "../types/types";

export const getProducts = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products`);

  return data;
};

export const getProduct = async (id: number) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/products/${id}`
  );

  return data;
};

export const addProduct = async (product: Product) => {
  const { id, ...productWithoutId } = product;
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/products/create`,
    productWithoutId
  );

  return data;
};

export const updateProduct = async (product: Product) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_API_URL}/products/update/${product.id}`,
    product
  );

  return data;
};

export const deleteProduct = async (id: number) => {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_API_URL}/products/delete/${id}`
  );

  return data;
};
