import axios from "axios";

export const getOrders = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);

  return data;
};

export const updateOrder = async (id: number, status: string) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_API_URL}/orders/update/${id}`,
    { status }
  );

  return data;
};

export const deleteOrder = async (id: number) => {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_API_URL}/orders/delete/${id}`
  );

  return data;
};
