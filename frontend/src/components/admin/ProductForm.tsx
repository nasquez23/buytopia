import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Product, ProductFormProps } from "../../types/types";

const CATEGORIES = [
  "Electronics",
  "Books",
  "Clothes",
  "Beauty",
  "Home",
  "Sports",
  "Toys",
  "Other",
];

const ProductForm: FC<ProductFormProps> = ({ open, onClose, product }) => {
  const [productData, setProductData] = useState<Product>({
    id: product?.id || 0,
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || 0,
    category: product?.category || "Other",
    stock: product?.stock || 0,
  });

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setProductData({
      ...productData,
      [event.target.name!]: event.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ bgcolor: "#db4444", color: "white", fontFamily: "Montserrat" }}
      >
        {product?.id !== 0 ? "Edit" : "Add"} Product
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 3,
            width: "50vh",
          }}
        >
          <TextField
            required
            label="Product Name"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
          <TextField
            required
            label="Description"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
          <TextField
            required
            label="Price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            type="number"
          />
          <FormControl required>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            label="Stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            type="number"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{ color: "gray", "&:hover": { bgcolor: "#e8e8e8" } }}
        >
          Cancel
        </Button>
        <Button sx={{ color: "#db4444", "&:hover": { color: "darkred", bgcolor: "#e8e8e8" } }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
