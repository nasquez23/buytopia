import { Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import SampleImage from "../assets/auth-image.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        mt: "5%",
        display: "flex",
        flexDirection: "row",
        mb: isMobile ? "20%" : "10%",
      }}
    >
      <Box
        component="img"
        src={SampleImage}
        alt="Image"
        sx={{
          width: isMobile ? "0" : "50%",
          display: isMobile ? "none" : "block",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100%" : "auto",
          px: "10%",
        }}
      >
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "600",
            fontFamily: "Montserrat",
            mt: isMobile ? "15%" : "35%",
            mb: 1,
          }}
        >
          Create an Account
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Montserrat",
            fontWeight: "500",
            mb: 5,
          }}
        >
          Enter your details below
        </Typography>
        <TextField
          variant="standard"
          placeholder="Name"
          sx={{ width: "100%", mb: 4 }}
        />
        <TextField
          variant="standard"
          placeholder="Email"
          sx={{ width: "100%", mb: 4 }}
        />
        <TextField
          variant="standard"
          placeholder="Password"
          sx={{ width: "100%", mb: 4 }}
        />
        <Button
          variant="contained"
          sx={{
            py: 2,
            px: 5,
            textTransform: "capitalize",
            fontSize: "16px",
            fontFamily: "Montserrat",
            backgroundColor: "#db4444",
            "&:hover": {
              backgroundColor: "darkred",
            },
          }}
        >
          Create Account
        </Button>
        <Typography sx={{ mt: 4, textAlign: "center", fontSize: "18px", color: "#888" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "black" }}>
            Log In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
