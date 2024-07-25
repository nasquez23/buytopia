import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import Logo from "../../assets/buytopia-logo.png";

const AdminHeader: FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <img src={Logo} height={70} />
        <Typography variant="h6" sx={{ fontFamily: "Montserrat", color: "black", fontSize: "1.5rem" }}>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
