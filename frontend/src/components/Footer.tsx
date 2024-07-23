import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "../assets/buytopia-logo.png";
import { Copyright, Send } from "@mui/icons-material";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box bgcolor="black" sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        py={2}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 5 : 15,
          px: isMobile ? "5%" : "10%",
          pt: "5%",
          pb: "2%",
        }}
        borderBottom={1}
        borderColor="#505050"
      >
        <Box
          sx={{
            display: "flex",
            pl: isMobile ? "20%" : "0%",
            flexDirection: "column",
          }}
        >
          <img src={Logo} alt="Buytopia logo" height={60} width={100} />
          <Typography
            variant="caption"
            color="white"
            sx={{ mt: 1, fontSize: "20px", fontWeight: 500 }}
          >
            Subscribe
          </Typography>
          <Typography
            variant="caption"
            color="white"
            sx={{ mb: 1, mt: 2, fontSize: "15px", fontWeight: "100" }}
          >
            Get 10% off your first order
          </Typography>
          <OutlinedInput
            placeholder="Enter your email"
            sx={{
              width: isMobile ? "60%" : "200px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiInputBase-input": {
                color: "gray",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "gray",
                opacity: 1,
              },
              "& .MuiIconButton-root": {
                color: "white",
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Box sx={{ color: "white", pl: isMobile ? "20%" : "0%" }}>
          <Typography sx={{ fontSize: "24px", mb: 4, mt: 2, fontWeight: 500 }}>
            Support
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            2220 Sveti Nikole, Macedonia
          </Typography>
          <Typography sx={{ fontWeight: 200, fontSize: "17px", mb: 2 }}>
            buytopia@gmail.com
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px" }}>
            +389 00 000 000
          </Typography>
        </Box>
        <Box sx={{ color: "white", pl: isMobile ? "20%" : "0%" }}>
          <Typography sx={{ fontSize: "24px", mb: 4, mt: 2, fontWeight: 500 }}>
            Account
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            My Account
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Login / Register
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Cart
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Wishlist
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Shop
          </Typography>
        </Box>
        <Box sx={{ color: "white", pl: isMobile ? "20%" : "0%" }}>
          <Typography sx={{ fontSize: "24px", mb: 4, mt: 2, fontWeight: 500 }}>
            Quick Link
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Terms of Service
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            FAQ
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "17px", mb: 2 }}>
            Contact
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "#505050", textAlign: "center", pt: 2, pb: isMobile ? 4 : 2 }}>
        <Copyright sx={{ verticalAlign: "middle", mr: 1 }} />
        Copyright Buytopia 2024. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
