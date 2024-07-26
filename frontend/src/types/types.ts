export interface NavLinksProps {
  direction: "horizontal" | "vertical";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

export interface ProductFormProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

export interface Order {
  id: number;
  customer: string;
  date: Date;
  totalAmount: number;
  status: string;
}

export interface OrderProps {
  open: boolean;
  onClose: () => void;
  order: Order | null;
}
