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
  CircularProgress,
} from "@mui/material";
import { Edit, Delete, Search, Add } from "@mui/icons-material";
import ProductForm from "../../components/admin/ProductForm";
import { Product } from "../../types/types";
import { deleteProduct, getProducts } from "../../services/ProductService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteModal from "../../components/DeleteModal";

const AdminProducts: FC = () => {
  const initialProduct: Product = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "OTHER",
    stock: 0,
  };

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [productToEdit, setProductToEdit] = useState<Product>(initialProduct);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [productIdToDelete, setProductIdToDelete] = useState<number>(0);
  const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const {
    mutate: deleteProductMutate,
    isPending: isDeleting,
    isError: isErrorWhileDeleting,
  } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      handleCloseDeleteModal();
    },
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts =
    products?.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleEditProduct = (product: Product) => {
    setProductToEdit(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setProductToEdit(initialProduct);
  };

  const handleShowDeleteModal = (id: number) => {
    setProductIdToDelete(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setProductIdToDelete(0);
  };

  return (
    <>
      <DeleteModal
        open={showDeleteModal}
        objectId={productIdToDelete}
        onClose={handleCloseDeleteModal}
        title="Delete Product"
        message="Are you sure you want to delete this product?"
        deleteFunction={deleteProductMutate}
        isDeleting={isDeleting}
        error={isErrorWhileDeleting}
      />
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
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: "10%" }}>
            <CircularProgress sx={{ color: "#db4444" }} />
          </Box>
        ) : isError ? (
          <Typography
            color="error"
            sx={{ textAlign: "center", fontSize: "1.5rem", py: "10%" }}
          >
            Could not load products, please try again later.
          </Typography>
        ) : filteredProducts.length === 0 ? (
          <Typography
            sx={{ textAlign: "center", fontSize: "1.5rem", py: "10%" }}
          >
            No products found.
          </Typography>
        ) : (
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
                      <IconButton
                        sx={{ color: "#f00000" }}
                        onClick={() => handleShowDeleteModal(product.id)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
};

export default AdminProducts;
