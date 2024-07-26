import { FC } from "react";
import { OrderDialogProps } from "../../types/types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";

const OrderDetails: FC<OrderDialogProps> = ({ open, onClose, order }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "40vh" }}>
          <Typography variant="body1"><strong>ID:</strong> {order?.id}</Typography>
          <Typography variant="body1"><strong>Customer:</strong> {order?.customer}</Typography>
          <Typography variant="body1"><strong>Total Amount:</strong> ${order?.totalAmount}</Typography>
          <Typography variant="body1"><strong>Status: </strong>{order?.status}</Typography>
          <Typography variant="body1"><strong>Date:</strong> {new Date(order?.date ?? new Date()).toLocaleDateString()}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetails;
