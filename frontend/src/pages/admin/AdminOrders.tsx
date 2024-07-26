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
} from "@mui/material";
import { Edit, Delete, Search, Visibility } from "@mui/icons-material";
import OrderForm from "../../components/admin/OrderForm";
import { Order } from "../../types/types";
import OrderDetails from "../../components/admin/OrderDetails";

const SAMPLE_ORDERS = [
  {
    id: 1,
    customer: "John Doe",
    totalAmount: 150,
    status: "Pending",
    date: new Date(),
  },
  {
    id: 2,
    customer: "Jane Smith",
    totalAmount: 200,
    status: "Approved",
    date: new Date(),
  },
  {
    id: 3,
    customer: "Sam Wilson",
    totalAmount: 100,
    status: "Rejected",
    date: new Date(),
  },
];

const AdminOrders: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>({
    id: 0,
    customer: "",
    totalAmount: 0,
    status: "",
    date: new Date(),
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

  const filteredOrders = SAMPLE_ORDERS.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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

export default AdminOrders;
