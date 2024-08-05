import { ChangeEvent, FC, useEffect, useState } from "react";
import { User, UserDialogProps } from "../../types/types";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser, updateUser } from "../../services/UsersService";

const ROLES = [
  { value: "Admin", label: "Admin" },
  { value: "Customer", label: "Customer" },
];

const UserForm: FC<UserDialogProps> = ({ open, onClose, user }) => {
  const [userData, setUserData] = useState<User>({
    id: user?.id || 0,
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "Customer",
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: user?.id !== 0 ? updateUser : addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      onClose();
    },
  });

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(userData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ bgcolor: "#db4444", color: "white", fontFamily: "Montserrat" }}
      >
        {user?.id !== 0 ? "Edit" : "Add"} User
      </DialogTitle>
      <DialogContent>
        <Box
          onSubmit={handleSubmit}
          component="form"
          id="user-form"
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
            label="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <TextField
            required
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            select
            required
            label="Role"
            name="role"
            value={userData.role}
            onChange={handleChange}
          >
            {ROLES.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.label}
              </MenuItem>
            ))}
          </TextField>
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
              form="user-form"
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

export default UserForm;
