import { ChangeEvent, FC, useState } from "react";
import { User, UserDialogProps } from "../../types/types";
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

const UserForm: FC<UserDialogProps> = ({ open, onClose, user }) => {
  const [userData, setUserData] = useState<User>({
    id: user?.id || 0,
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "Customer",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ bgcolor: "#db4444", color: "white", fontFamily: "Montserrat" }}
      >
        {user?.id !== 0 ? "Edit" : "Add"} User
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={user?.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={user?.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Role"
            variant="outlined"
            name="role"
            value={user?.role}
            onChange={handleChange}
            sx={{ mb: 2 }}
          >
            <MenuItem key="admin" value="Admin">
              Admin
            </MenuItem>
            <MenuItem key="customer" value="Customer">
              Customer
            </MenuItem>
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" sx={{ bgcolor: "#db4444", color: "white" }}>
          {user?.id !== 0 ? "Edit" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserForm;
