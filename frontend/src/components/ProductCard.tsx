import { FC } from "react";
import { Product } from "../types/types";
import { Box, Grid, Typography } from "@mui/material";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
      <Box>
        <img
          src={product.image as string}
          alt={product.name}
          height={230}
          style={{ objectFit: "cover", width: "100%" }}
        />
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "black",
            fontWeight: 600,
            fontSize: "1.2rem",
            mt: 1,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#db4444",
            fontWeight: 600,
            fontSize: "1.2rem",
            mt: 1,
          }}
        >
          ${product.price}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
