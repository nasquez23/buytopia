import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/ProductService";
import { Product } from "../types/types";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const OurProducts: FC = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const isMobile = useMediaQuery("(max-width: 600px)");
  const productsPerPage = isMobile ? 4 : 8;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex + productsPerPage < (products?.length ?? 0)) {
      setCurrentIndex((prev) => prev + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= 0) {
      setCurrentIndex((prev) => prev - productsPerPage);
    }
  };

  const visibleProducts = products?.slice(
    currentIndex,
    currentIndex + productsPerPage
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
          Our Products
        </Typography>
      </Box>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: "10%" }}>
          <CircularProgress sx={{ color: "#db4444" }} />
        </Box>
      ) : isError ? (
        <Typography
          color="error"
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            py: "10%",
            fontFamily: "Montserrat",
            fontWeight: 500,
          }}
        >
          Could not load products, please try again later.
        </Typography>
      ) : products?.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            py: "10%",
            fontFamily: "Montserrat",
            fontWeight: 500,
          }}
        >
          No products found.
        </Typography>
      ) : (
        <>
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
              Explore Our Products
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
                sx={{ color: "black", bgcolor: "#e8e8e8", borderRadius: "45%" }}
                disabled={currentIndex === 0}
                onClick={handlePrev}
              >
                <ArrowBack />
              </Button>
              <Button
                sx={{ color: "black", bgcolor: "#e8e8e8", borderRadius: "45%" }}
                disabled={
                  currentIndex + productsPerPage >= (products?.length ?? 0)
                }
                onClick={handleNext}
              >
                <ArrowForward />
              </Button>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 10 }}>
            <Grid container rowSpacing={7} columnSpacing={3} sx={{ mb: 10 }}>
              {visibleProducts?.map((product: Product, index: number) => (
                <ProductCard product={product} key={index} />
              ))}
            </Grid>
            <Link
              style={{
                display: "block",
                width: "fit-content",
                margin: "0 auto",
                textAlign: "center",
                textDecoration: "none",
                color: "white",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                backgroundColor: "#db4444",
                borderRadius: "3px",
                fontWeight: "500",
                fontFamily: "Montserrat",
                transition: "0.3s",
              }}
              to="/products"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "darkred")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#db4444")
              }
            >
              View All Products
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default OurProducts;
