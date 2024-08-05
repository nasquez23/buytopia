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
import { Edit, Delete, Search, Visibility, Add } from "@mui/icons-material";
import UserForm from "../../components/admin/UserForm";
import UserDetails from "../../components/admin/UserDetails";
import DeleteModal from "../../components/DeleteModal";
import { User } from "../../types/types";
import { deleteUser, getUsers } from "../../services/UsersService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [userIdToDelete, setUserIdToDelete] = useState<number>(0);
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const {
    mutate: deleteUserMutate,
    isPending: isDeleting,
    isError: isErrorWhileDeleting,
  } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      handleCloseDeleteModal();
    },
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers =
    users?.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedUser(initialUser);
  };

  const handleShowUserDetails = (user: User) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  const handleCloseUserDetails = () => {
    setShowUserDetails(false);
    setSelectedUser(initialUser);
  };

  const handleShowDeleteModal = (id: number) => {
    setUserIdToDelete(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setUserIdToDelete(0);
  };

  return (
    <>
      <DeleteModal
        open={showDeleteModal}
        objectId={userIdToDelete}
        onClose={handleCloseDeleteModal}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        deleteFunction={deleteUserMutate}
        isDeleting={isDeleting}
        error={isErrorWhileDeleting}
      />
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
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: "10%" }}>
            <CircularProgress sx={{ color: "#db4444" }} />
          </Box>
        ) : isError ? (
          <Typography
            color="error"
            sx={{ textAlign: "center", fontSize: "1.5rem", py: "10%" }}
          >
            Could not load users, please try again later.
          </Typography>
        ) : filteredUsers.length === 0 ? (
          <Typography
            sx={{ textAlign: "center", fontSize: "1.5rem", py: "10%" }}
          >
            No users found.
          </Typography>
        ) : (
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
                      <IconButton
                        sx={{ color: "gray" }}
                        onClick={() => handleEditUser(user)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        sx={{ color: "#f00000" }}
                        onClick={() => handleShowDeleteModal(user.id)}
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

export default AdminUsers;
