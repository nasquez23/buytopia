import { Box, Breadcrumbs, Grid, Typography, useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/types";
import { getProducts } from "../services/ProductService";
import ProductCard from "../components/ProductCard";

const Products: FC = () => {
  const { data: products } = useQuery<Product[], Error>({
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
        <Grid container rowSpacing={7} columnSpacing={3} sx={{ mb: 10 }}>
          {products?.map((product: Product, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
