import { ChangeEvent, FC, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Edit, Delete, Search, Add } from "@mui/icons-material";
import ProductForm from "../../components/admin/ProductForm";
import { Product } from "../../types/types";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is a sample product",
    category: "Electronics",
    stock: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    description: "This is a sample product",
    category: "Books",
    stock: 50,
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    description: "This is a sample product",
    category: "Clothes",
    stock: 25,
  },
];

const AdminProducts: FC = () => {
  const initialProduct: Product = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    category: "Other",
    stock: 0,
  };
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [productToEdit, setProductToEdit] = useState<Product>(initialProduct);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditProduct = (product: Product) => {
    setProductToEdit(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setProductToEdit(initialProduct);
  };

  return (
    <>
      <ProductForm
        open={showForm}
        onClose={handleCloseForm}
        product={productToEdit}
      />
      <Box sx={{ p: 3, width: "80%" }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Montserrat" }}>
          Manage Products
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            variant="outlined"
            placeholder="Search Products"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ width: "40%" }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#db4444", "&:hover": { bgcolor: "darkred" } }}
            startIcon={<Add />}
            onClick={() => setShowForm(true)}
          >
            Add New Product
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Stock Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <IconButton
                      sx={{ color: "gray" }}
                      onClick={() => handleEditProduct(product)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton sx={{ color: "#f00000" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AdminProducts;
