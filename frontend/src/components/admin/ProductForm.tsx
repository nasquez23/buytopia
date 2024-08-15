import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Product, ProductFormProps } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, updateProduct } from "../../services/ProductService";

const CATEGORIES = [
  { value: "FOOD", label: "Food" },
  { value: "ELECTRONICS", label: "Electronics" },
  { value: "BOOKS", label: "Books" },
  { value: "CLOTHES", label: "Clothes" },
  { value: "BEAUTY", label: "Beauty" },
  { value: "HOME", label: "Home" },
  { value: "SPORTS", label: "Sports" },
  { value: "TOYS", label: "Toys" },
  { value: "OTHER", label: "Other" },
];
const ProductForm: FC<ProductFormProps> = ({ open, onClose, product }) => {
  const [productData, setProductData] = useState<Product>({
    id: product?.id || 0,
    name: product?.name || "",
    description: product?.description || "",
    image: product?.image || "",
    price: product?.price || 0,
    category: product?.category || "OTHER",
    stock: product?.stock || 0,
  });
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    product?.image ? (product.image as string) : null
  );

  useEffect(() => {
    if (product) {
      setProductData(product);
      setImagePreview(product.image as string);
    }
  }, [product]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      event.target instanceof HTMLInputElement &&
      event.target.type === "file"
    ) {
      const file = event.target.files![0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result as string);
        setProductData({
          ...productData,
          image: file,
        });
      };
      fileReader.readAsDataURL(file);
    } else {
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: product?.id !== 0 ? updateProduct : addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      onClose();
    },
  });

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(productData);
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
          onSubmit={handleSubmit}
          component="form"
          id="product-form"
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
          <TextField
            required
            select
            name="category"
            label="Category"
            value={productData.category}
            onChange={handleChange}
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            label="Stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            type="number"
          />
          {productData.image && (
            <img src={imagePreview as string} alt="Product Image" />
          )}
          <input
            ref={fileInputRef}
            onChange={handleChange}
            type="file"
            style={{ display: "none" }}
            name="image"
            id="image"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="contained"
            type="button"
            sx={{
              width: "50%",
              bgcolor: "#db4444",
              "&:hover": { bgcolor: "darkred" },
            }}
          >
            Select Image
          </Button>
        </Box>
      </DialogContent>
      {isError && (
        <Box sx={{ py: 2 }}>
          <Typography color="error" sx={{ textAlign: "center" }}>
            {error.message}
          </Typography>
        </Box>
      )}
      <DialogActions>
        {isPending ? (
          <Box sx={{ display: "flex", mx: "auto", py: 2 }}>
            <CircularProgress sx={{ color: "#db4444" }} />
          </Box>
        ) : (
          <>
            <Button
              onClick={onClose}
              type="button"
              sx={{ color: "gray", "&:hover": { bgcolor: "#e8e8e8" } }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="product-form"
              sx={{
                color: "#db4444",
                "&:hover": { color: "darkred", bgcolor: "#e8e8e8" },
              }}
            >
              Save
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
