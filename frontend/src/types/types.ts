export interface NavLinksProps {
  direction: "horizontal" | "vertical";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category:
    | "FOOD"
    | "ELECTRONICS"
    | "BOOKS"
    | "CLOTHES"
    | "BEAUTY"
    | "HOME"
    | "SPORTS"
    | "TOYS"
    | "OTHER";
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

export interface DeleteModalProps {
  open: boolean;
  objectId: number;
  onClose: () => void;
  deleteFunction: (id: number) => void;
  title: string;
  message: string;
  isDeleting: boolean;
  error: boolean;
}
