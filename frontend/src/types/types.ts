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
