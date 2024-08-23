import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types/types";
import { getProduct } from "../services/ProductService";
import {
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  CircularProgress,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import {
  FavoriteBorder,
  LocalShippingOutlined,
  Sync,
} from "@mui/icons-material";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id as string),
  });
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    if (quantity < (product?.stock ?? 0)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Box>
      <Breadcrumbs
        sx={{
          px: "10%",
          py: isMobile ? "10%" : "5%",
          fontFamily: "Montserrat",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "darkgray",
          }}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          Products
        </Link>
        <Typography
          color="black"
          sx={{ fontFamily: "Montserrat", fontWeight: 500 }}
        >
          {product?.name}
        </Typography>
      </Breadcrumbs>
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
          Could not load this product, please try again later.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            px: "10%",
            pb: "10%",
          }}
        >
          <Box sx={{ width: isMobile ? "100%" : "50%" }}>
            <img
              src={product?.image as string}
              alt={product?.name}
              height={530}
              style={{ width: "100%", borderRadius: "5px", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              pl: isMobile ? 0 : "5%",
              width: isMobile ? "100%" : "50%",
              mt: isMobile ? 3 : 0,
            }}
          >
            <Box sx={{ borderBottom: 2, pb: 3, borderColor: "darkgray" }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {product?.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "black",
                  mt: 2,
                }}
              >
                ${product?.price}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                  fontWeight: 450,
                  color: "black",
                  mt: 2,
                  height: "4.5rem",
                  overflowY: "auto",
                }}
              >
                {product?.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                mt: 3,
                gap: 3,
                width: "100%",
              }}
            >
              <ButtonGroup sx={{ height: "3rem" }}>
                <Button
                  variant="outlined"
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                  sx={{
                    width: "4rem",
                    fontSize: "1.5rem",
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "lightgray",
                    borderRight: "none",
                    "&:hover": {
                      backgroundColor: "lightgray",
                      borderColor: "lightgray",
                      borderRight: "none",
                    },
                    "&:focus": {
                      outline: "none",
                      borderRight: "none",
                      borderColor: "lightgray",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  -
                </Button>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "black",
                    border: 1,
                    borderColor: "rgba(0, 0, 0, 0.23)",
                    px: 4,
                    pt: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {quantity}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleIncrement}
                  disabled={quantity === product?.stock}
                  sx={{
                    width: "4rem",
                    fontSize: "1.5rem",
                    backgroundColor: "#db4444",
                    color: "white",
                    borderLeft: "none",
                    "&:hover": {
                      backgroundColor: "darkred",
                      borderLeft: "none",
                      borderColor: "darkred",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    height: "3rem",
                    width: "13rem",
                    backgroundColor: "#db4444",
                    fontFamily: "Montserrat",
                    "&:hover": { backgroundColor: "darkred" },
                    transition: "all 0.3s",
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    height: "3rem",
                    borderColor: "darkgray",
                    "&:hover": {
                      borderColor: "darkgray",
                      backgroundColor: "lightgray",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  <FavoriteBorder />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: 2,
                borderColor: "darkgray",
                mt: 5,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", p: 3 }}>
                <LocalShippingOutlined sx={{ fontSize: "3rem" }} />
                <Box sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    Free Delivery
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Montserrat", fontWeight: 500 }}
                  >
                    Get free delivery for orders over 100$
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ borderColor: "darkgray", borderWidth: 1 }} />
              <Box sx={{ display: "flex", flexDirection: "row", p: 3 }}>
                <Sync sx={{ fontSize: "3rem" }} />
                <Box sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    Return Delivery
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Montserrat", fontWeight: 500 }}
                  >
                    Free 30-day return policy
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;
