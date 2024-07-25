import { Box, Typography, Paper, Grid } from "@mui/material";
import {
  People,
  ShoppingCart,
  Assignment,
  Notifications,
} from "@mui/icons-material";

const AdminHome = () => {
  return (
    <Box sx={{ p: 3, width: "80%" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <People sx={{ fontSize: 40, color: "#db4444" }} />
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">1,234</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <ShoppingCart sx={{ fontSize: 40, color: "#db4444" }} />
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">567</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Assignment sx={{ fontSize: 40, color: "#db4444" }} />
            <Typography variant="h6">Pending Orders</Typography>
            <Typography variant="h4">12</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Notifications sx={{ fontSize: 40, color: "#db4444" }} />
            <Typography variant="h6">Notifications</Typography>
            <Typography variant="h4">3</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Recent Activity
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="body1">User John Doe created an order.</Typography>
          <Typography variant="body1">Product XYZ was added to the catalog.</Typography>
          <Typography variant="body1">Order #12345 was shipped.</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminHome;
