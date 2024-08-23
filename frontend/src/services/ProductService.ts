import { axiosInstance } from "../axios/axios";
import { Product } from "../types/types";

export const getProducts = async () => {
  const { data } = await axiosInstance.get("/products");

  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await axiosInstance.get(`/products/${id}`);

  return data;
};

export const addProduct = async (product: Product) => {
  const formData = new FormData();
  Object.entries(product).forEach(([key, value]) => {
    formData.append(key, value);
  });
  formData.delete("id");
  const { data } = await axiosInstance.post(`/products/create`, formData);

  return data;
};

export const updateProduct = async (product: Product) => {
  const formData = new FormData();
  Object.entries(product).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const { data } = await axiosInstance.put(
    `/products/update/${product.id}`,
    formData
  );

  return data;
};

export const deleteProduct = async (id: number) => {
  const { data } = await axiosInstance.delete(`/products/delete/${id}`);

  return data;
};
