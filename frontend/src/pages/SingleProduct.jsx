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

  const data = await response.json();
  return data;
};

export default function SingleProduct() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({ queryKey: ["product"], queryFn: () => fetchProduct(id) });


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
        Error: {error.message}
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
            image={`http://localhost:8000${product.imageUrl[0]}`} // Assuming imageUrl contains a valid path
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
