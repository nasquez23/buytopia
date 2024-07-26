import { ChangeEvent, FC, useState, useEffect } from "react";
import { OrderProps, Order } from "../../types/types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";

const STATUS = ["Pending", "Approved", "Rejected"];

const OrderForm: FC<OrderProps> = ({ open, onClose, order }) => {
  const [orderData, setOrderData] = useState<Order>({
    id: order?.id || 0,
    totalAmount: order?.totalAmount || 0,
    status: order?.status || "Pending",
    customer: order?.customer || "",
    date: order?.date || new Date(),
  });

  useEffect(() => {
    if (order) {
      setOrderData(order);
    }
  }, [order]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    setOrderData({ ...orderData, [event.target.name!]: event.target.value });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ bgcolor: "#db4444", color: "white", fontFamily: "Montserrat" }}
      >
        Edit Order
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3, width: "50vh" }}
        >
          <TextField
            required
            label="Total Amount"
            type="number"
            name="totalAmount"
            value={orderData.totalAmount}
            onChange={handleChange}
          />
          <TextField
            required
            select
            name="status"
            label="Status"
            value={orderData.status}
            onChange={handleChange}
          >
            {STATUS.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{ color: "gray", "&:hover": { bgcolor: "#e8e8e8" } }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            color: "#db4444",
            "&:hover": { color: "darkred", bgcolor: "#e8e8e8" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderForm;
