import { Box, Breadcrumbs, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import SampleImage from "../assets/about.png";
import {
  Euro,
  LocalShipping,
  PersonOutline,
  Public,
  RocketLaunch,
  SupportAgent,
  VerifiedUser,
} from "@mui/icons-material";
import { FC } from "react";

const About: FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Breadcrumbs
        sx={{
          px: "10%",
          py: isMobile ? "10%" : "5%",
          fontFamily: "Montserrat",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "darkgray" }}>
          Home
        </Link>
        <Typography
          color="text.primary"
          sx={{ fontFamily: "Montserrat", fontWeight: 500 }}
        >
          About
        </Typography>
      </Breadcrumbs>
      <Box sx={{ display: "flex", flexDirection: "row", mb: "10%" }}>
        <Box sx={{ width: isMobile ? "100%" : "50%", pl: "10%" }}>
          <Typography
            sx={{
              mt: "10%",
              fontWeight: "500",
              mb: "5%",
              fontFamily: "Montserrat",
            }}
            variant="h2"
          >
            Our Story
          </Typography>
          <Typography
            sx={{
              mr: 10,
              fontWeight: 400,
              fontSize: "17px",
              fontFamily: "Montserrat",
            }}
          >
            Welcome to Buytopia! Founded in 2024, our mission is to make quality
            products accessible and affordable. Starting from a small garage,
            we've grown into a thriving online marketplace offering a diverse
            range of items, from electronics to fashion. Our commitment to
            excellence ensures competitive prices, fast shipping, and top-notch
            customer service. At Buytopia, we believe shopping should be easy
            and enjoyable, and we're dedicated to making that a reality for
            every customer. We continuously expand our product offerings to meet
            your needs and strive to bring you the latest and greatest in
            retail. Thank you for being part of our journey and for supporting
            our vision.
          </Typography>
        </Box>
        <Box
          component="img"
          src={SampleImage}
          alt="About"
          sx={{
            width: isMobile ? "0" : "50%",
            display: isMobile ? "none" : "block",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          px: "10%",
          mb: "10%",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 2,
            borderColor: "lightgray",
            borderRadius: 1,
            px: 8,
            py: 3,
          }}
        >
          <PersonOutline
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              mb: 1,
              fontFamily: "Montserrat",
            }}
          >
            33k
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Monthly Visitors
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 2,
            borderColor: "lightgray",
            borderRadius: 1,
            px: 8,
            py: 3,
          }}
        >
          <Euro
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              mb: 1,
              fontFamily: "Montserrat",
            }}
          >
            45k
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Annual gross sales
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 2,
            borderColor: "lightgray",
            borderRadius: 1,
            px: 8,
            py: 3,
          }}
        >
          <Public
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              mb: 1,
              fontFamily: "Montserrat",
            }}
          >
            50+
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Countries served
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 2,
            borderColor: "lightgray",
            borderRadius: 1,
            px: 8,
            py: 3,
          }}
        >
          <RocketLaunch
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              mb: 1,
              fontFamily: "Montserrat",
            }}
          >
            100+
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Orders shipped daily
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          px: "10%",
          mb: "10%",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 8,
            py: 3,
          }}
        >
          <LocalShipping
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Free and Fast delivery
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Montserrat",
            }}
          >
            Free delivery for orders over 100€
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 8,
            py: 3,
          }}
        >
          <SupportAgent
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            24/7 Customer Service
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Montserrat",
            }}
          >
            Always here to help
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 3,
          }}
        >
          <VerifiedUser
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              p: 2,
              mt: 2,
              mb: 3,
              color: "white",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Money Back Guarantee
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Montserrat",
            }}
          >
            We offer a 30-day return policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
