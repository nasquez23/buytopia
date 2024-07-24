import { Box, Typography } from "@mui/material";
import { FC } from "react";
import HeroImage from "../assets/hero.jpg";

const Hero: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          p: 3,
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, fontFamily: "Montserrat" }}>
          Welcome to Buytopia
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
          Your one-stop shop for quality products and unbeatable prices
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
