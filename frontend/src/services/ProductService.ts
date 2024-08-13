import { axiosInstance } from "../axios/axios";
import { Product } from "../types/types";

export const getProducts = async () => {
  const { data } = await axiosInstance.get("/products");

  return data;
};

export const getProduct = async (id: number) => {
  const { data } = await axiosInstance.get(`/products/${id}`);

  return data;
};

export const addProduct = async (product: Product) => {
  const { id, ...productWithoutId } = product;
  const { data } = await axiosInstance.post(
    `/products/create`,
    productWithoutId
  );

  return data;
};

export const updateProduct = async (product: Product) => {
  const { data } = await axiosInstance.put(
    `/products/update/${product.id}`,
    product
  );

  return data;
};

export const deleteProduct = async (id: number) => {
  const { data } = await axiosInstance.delete(`/products/delete/${id}`);

  return data;
};
