import { useState, FC } from "react";
import {
  Box,
  IconButton,
  Drawer,
  InputBase,
  Backdrop,
  Input,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircleRounded,
  FavoriteBorder,
  ShoppingCartOutlined,
  Search as SearchIcon,
} from "@mui/icons-material";
import Logo from "../assets/buytopia-logo.png";
import NavLinks from "./NavLinks";
import { useAuth } from "../hooks/useAuth";

const Header: FC = () => {
  const { data: user } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <Box
      sx={{
        px: isMobile ? "3%" : "10%",
        mt: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: isMobile ? "" : "space-between",
        paddingBottom: 2,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="Buytopia logo" height={70} />
      </Box>
      {isMobile ? (
        <>
          <IconButton
            sx={{ position: "absolute", right: 15 }}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <NavLinks direction="vertical" />
            </Box>
          </Drawer>
        </>
      ) : (
        <Box>
          <NavLinks direction="horizontal" />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: isMobile ? "25%" : "0",
          gap: isMobile ? "10px" : "0",
        }}
      >
        {!isMobile ? (
          <Input placeholder="What are you looking for?" sx={{ mr: 2 }} />
        ) : (
          <>
            <IconButton onClick={toggleSearch} color="inherit">
              <SearchIcon />
            </IconButton>
            <Backdrop
              sx={{
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={searchOpen}
              onClick={toggleSearch}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <InputBase
                  autoFocus
                  placeholder="Search..."
                  sx={{ bgcolor: "background.paper", p: 1, borderRadius: 1 }}
                />
              </Box>
            </Backdrop>
          </>
        )}
        {user && (
          <>
            <ShoppingCartOutlined sx={{ mr: 2 }} />
            <AccountCircleRounded />
            <FavoriteBorder sx={{ mr: 2 }} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
