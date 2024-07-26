import { FC, useState } from "react";
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
import { Edit, Delete, Search, Visibility, Add } from "@mui/icons-material";
import UserForm from "../../components/admin/UserForm";
import { User } from "../../types/types";
import UserDetails from "../../components/admin/UserDetails";

const SAMPLE_USERS: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Customer" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Customer" },
];

const AdminUsers: FC = () => {
  const initialUser: User = {
    id: 0,
    name: "",
    email: "",
    role: "Customer",
  };
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User>(initialUser);
  const [showUserDetails, setShowUserDetails] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = SAMPLE_USERS.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditUser = (user: User) => {
    setShowForm(true);
    setSelectedUser(user);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedUser(initialUser);
  };

  const handleShowUserDetails = (user: User) => {
    setShowUserDetails(true);
    setSelectedUser(user);
  };

  const handleCloseUserDetails = () => {
    setShowUserDetails(false);
    setSelectedUser(initialUser);
  }

  return (
    <>
      <UserForm open={showForm} onClose={handleCloseForm} user={selectedUser} />
      <UserDetails
        open={showUserDetails}
        onClose={handleCloseUserDetails}
        user={selectedUser}
      />
      <Box sx={{ p: 3, width: "80%" }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Montserrat" }}>
          Manage Users
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            variant="outlined"
            placeholder="Search Users"
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
            Add New User
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleShowUserDetails(user)}
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton onClick={() => handleEditUser(user)}>
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

export default AdminUsers;
