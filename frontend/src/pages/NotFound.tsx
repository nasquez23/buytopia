import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: isMobile ? "20%" : "10%",
        mb: isMobile ? "20%" : "10%",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "500", fontFamily: "Montserrat" }}
      >
        404 Not Found
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontFamily: "Montserrat", mt: 3, mb: isMobile ? "10%" : "5%" }}
      >
        The page you are looking for does not exist
      </Typography>
      <Link to="/">
        <Button
          sx={{
            py: 2,
            px: 5,
            textTransform: "capitalize",
            fontSize: "16px",
            fontFamily: "Montserrat",
            color: "white",
            backgroundColor: "#db4444",
            "&:hover": {
              backgroundColor: "darkred",
            },
          }}
        >
          Back to Home Page
        </Button>{" "}
      </Link>
    </Box>
  );
};

export default NotFound;
