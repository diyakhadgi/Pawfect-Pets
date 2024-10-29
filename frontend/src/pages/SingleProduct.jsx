import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import BreadCrumbs from "../components/BreadCrumbs";

const fetchProduct = async (id) => {
  const authToken = localStorage.getItem("accessToken");
  const response = await fetch(
    `http://localhost:8000/product/getSingleProduct/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await response.json();
  return data;
};

export default function SingleProduct() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Typography variant="h6" color="error">
            Error: {error.message}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={refetch}
            sx={{ mt: 2 }}
          >
            Retry
          </Button>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <Container>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={`http://localhost:8000${product.imageUrl[0]}`}
            alt={product.itemName}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.itemName}
            </Typography>
            <Typography variant="h6">Price: ${product.itemPrice}</Typography>
            <Typography variant="body1" color="textSecondary">
              Stock: {product.stocks}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Type: {product.typeOfItem}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
