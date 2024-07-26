import { FC } from "react";
import { UserDialogProps } from "../../types/types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";

const UserDetails: FC<UserDialogProps> = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "40vh" }}>
          <Typography variant="body1"><strong>ID:</strong> {user?.id}</Typography>
          <Typography variant="body1"><strong>Name:</strong> {user?.name}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {user?.email}</Typography>
          <Typography variant="body1"><strong>Role:</strong> {user?.role}</Typography>
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

export default UserDetails;
