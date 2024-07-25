import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import {
  LunchDining,
  Cable,
  Checkroom,
  MenuBook,
  SportsSoccer,
  Toys,
  Face,
  Home,
  MoreHoriz,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

const CATEGORIES = [
  {
    title: "Food",
    icon: (
      <LunchDining
        sx={{
          fontSize: 70,
          color: "#db4444",
        }}
      />
    ),
  },
  {
    title: "Electronics",
    icon: <Cable sx={{ fontSize: 70, color: "#db4444" }} />,
  },
  {
    title: "Clothes",
    icon: <Checkroom sx={{ fontSize: 70, color: "#db4444" }} />,
  },
  {
    title: "Books",
    icon: <MenuBook sx={{ fontSize: 70, color: "#db4444" }} />,
  },
  {
    title: "Sports",
    icon: <SportsSoccer sx={{ fontSize: 70, color: "#db4444" }} />,
  },
  { title: "Toys", icon: <Toys sx={{ fontSize: 70, color: "#db4444" }} /> },
  { title: "Beauty", icon: <Face sx={{ fontSize: 70, color: "#db4444" }} /> },
  { title: "Home", icon: <Home sx={{ fontSize: 70, color: "#db4444" }} /> },
  {
    title: "Other",
    icon: <MoreHoriz sx={{ fontSize: 70, color: "#db4444" }} />,
  },
];

const Categories: FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const itemsPerPage = isMobile ? 2 : 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < CATEGORIES.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleCategories = CATEGORIES.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <Box sx={{ px: "10%", py: isMobile ? "15%" : "7%" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            bgcolor: "#db4444",
            width: "25px",
            height: "40px",
            borderRadius: "10%",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            mt: 1,
            fontFamily: "Montserrat",
            fontSize: "1rem",
            color: "darkred",
            fontWeight: "bold",
          }}
        >
          Categories
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "2rem" : "2.3rem",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          Browse By Category
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            gap: 1,
          }}
        >
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{ color: "black", bgcolor: "#e8e8e8", borderRadius: "45%" }}
          >
            <ArrowBack />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= CATEGORIES.length}
            sx={{ color: "black", bgcolor: "#e8e8e8", borderRadius: "45%" }}
          >
            <ArrowForward />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 10, gap: 5 }}>
        {visibleCategories.map((category, idx) => (
          <Box
            key={idx}
            sx={{
              width: "100%",
              height: "12rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: 1,
              borderColor: "gray",
              borderRadius: 2,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "#db4444",
                "& svg": {
                  color: "white",
                },
                "& .category-title": {
                  color: "white",
                },
              },
            }}
          >
            {category.icon}
            <Typography
              className="category-title"
              sx={{
                mt: 2,
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "darkred",
              }}
            >
              {category.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
