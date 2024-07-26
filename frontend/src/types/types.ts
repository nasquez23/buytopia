export interface NavLinksProps {
  direction: "horizontal" | "vertical";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category:
    | "Food"
    | "Electronics"
    | "Books"
    | "Clothes"
    | "Beauty"
    | "Home"
    | "Sports"
    | "Toys"
    | "Other";
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
  status: "Approved" | "Pending" | "Rejected";
}

export interface OrderDialogProps {
  open: boolean;
  onClose: () => void;
  order: Order | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Customer";
}

export interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
}
