import { ChangeEvent, FC, useState } from "react";
import {
  Box,
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
import { Edit, Delete, Search, Visibility } from "@mui/icons-material";
import OrderForm from "../../components/admin/OrderForm";
import OrderDetails from "../../components/admin/OrderDetails";
import { Order } from "../../types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteOrder, getOrders } from "../../services/OrderService";
import DeleteModal from "../../components/DeleteModal";

const AdminOrders: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>({
    id: 0,
    customer: "",
    totalAmount: 0,
    status: "Pending",
    date: new Date(),
  });
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [orderIdToDelete, setOrderIdToDelete] = useState<number>(0);
  const queryClient = useQueryClient();

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery<Order[], Error>({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const {
    mutate: deleteOrderMutate,
    isPending: isDeleting,
    isError: isErrorWhileDeleting,
  } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      setShowDeleteModal(false);
    },
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleEditOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowForm(true);
  };

  const handleShowOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const filteredOrders =
    orders?.filter((order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleShowDeleteModal = (id: number) => {
    setOrderIdToDelete(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setOrderIdToDelete(0);
  };

  return (
    <>
      <DeleteModal
        open={showDeleteModal}
        objectId={orderIdToDelete}
        onClose={handleCloseDeleteModal}
        title="Delete Order"
        message="Are you sure you want to delete this order?"
        deleteFunction={deleteOrderMutate}
        isDeleting={isDeleting}
        error={isErrorWhileDeleting}
      />
      <OrderDetails
        open={showOrderDetails}
        onClose={() => setShowOrderDetails(false)}
        order={selectedOrder}
      />
      <OrderForm
        open={showForm}
        onClose={() => setShowForm(false)}
        order={selectedOrder}
      />
      <Box sx={{ p: 3, width: "80%" }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Montserrat" }}>
          Manage Orders
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            variant="outlined"
            placeholder="Search Orders"
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
            Could not load orders, please try again later.
          </Typography>
        ) : filteredOrders.length === 0 ? (
          <Typography
            sx={{ textAlign: "center", fontSize: "1.5rem", py: "10%" }}
          >
            No orders found.
          </Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>${order.totalAmount}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>{order.date.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleShowOrderDetails(order)}
                      >
                        <Visibility />
                      </IconButton>
                      <IconButton onClick={() => handleEditOrder(order)}>
                        <Edit />
                      </IconButton>
                      <IconButton
                        sx={{ color: "#f00000" }}
                        onClick={() => handleShowDeleteModal(order.id)}
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

export default AdminOrders;
