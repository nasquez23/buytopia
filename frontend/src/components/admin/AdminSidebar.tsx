import { List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const AdminSidebar: FC = () => {
  return (
    <List
      component="nav"
      sx={{
        bgcolor: "#db4444",
        mt: 1,
        borderRadius: 2,
        color: "white",
        height: "100%",
      }}
    >
      <ListItem button component={Link} to="/admin" sx={{ py: 2 }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: 500 }}>
          Dashboard Home
        </Typography>
      </ListItem>
      <ListItem button component={Link} to="/admin/users" sx={{ py: 2 }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: 500 }}>
          Users Management
        </Typography>{" "}
      </ListItem>
      <ListItem button component={Link} to="/admin/products" sx={{ py: 2 }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: 500 }}>
          Products Management
        </Typography>{" "}
      </ListItem>
      <ListItem button component={Link} to="/admin/orders" sx={{ py: 2 }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: 500 }}>
          Orders Management
        </Typography>{" "}
      </ListItem>
    </List>
  );
};

export default AdminSidebar;
