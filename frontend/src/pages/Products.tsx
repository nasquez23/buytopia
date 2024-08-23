import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/types";
import { getProducts } from "../services/ProductService";
import ProductCard from "../components/ProductCard";

const Products: FC = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const isMobile = useMediaQuery("(max-width: 600px)");

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
          Products
        </Typography>
      </Breadcrumbs>
      <Box sx={{ px: "10%" }}>
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
          <Grid container rowSpacing={7} columnSpacing={3} sx={{ mb: 10 }}>
            {products?.map((product: Product, index: number) => (
              <ProductCard product={product} key={index} />
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Products;
