import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import SampleImage from "../assets/auth-image.png";
import { Link, useNavigate } from "react-router-dom";
import { FC, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/AuthService";
import { useNotification } from "../hooks/useNotification";

const Login: FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const notificationContext = useNotification();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      notificationContext?.showNotification(
        "Logged in successfully",
        "success"
      );
      navigate("/");
      window.scrollTo(0, 0);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ email, password });
  };

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
        component="form"
        onSubmit={handleSubmit}
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
            mt: isMobile ? "15%" : "45%",
            mb: 1,
          }}
        >
          Log in to Buytopia
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
          placeholder="Email"
          name="email"
          sx={{ width: "100%", mb: 4 }}
        />
        <TextField
          type="password"
          variant="standard"
          name="password"
          placeholder="Password"
          sx={{ width: "100%", mb: 4 }}
        />
        {isPending ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: "10%" }}>
            <CircularProgress sx={{ color: "#db4444" }} />
          </Box>
        ) : (
          <Button
            type="submit"
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
            Log In
          </Button>
        )}
        <Typography
          sx={{
            mt: 4,
            textAlign: "center",
            fontSize: "18px",
            color: "#888",
            fontFamily: "Montserrat",
          }}
        >
          New to the site?{" "}
          <Link to="/signup" style={{ color: "black" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
