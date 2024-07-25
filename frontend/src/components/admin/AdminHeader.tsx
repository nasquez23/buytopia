import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const AdminHeader: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Admin Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
