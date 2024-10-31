import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";


// Fetch products function
const fetchProducts = async () => {
  const authToken = localStorage.getItem("accessToken");
  const response = await axios.get("http://localhost:8000/product/getallProducts", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};

// 
const Shop = () => {
  const queryClient = useQueryClient();
  const [searchTerm,setSearchTerm] = useState("");
  // Fetch products query
  const { isLoading, error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Mutation to add products to cart
  const addToCart = useMutation({
    mutationFn: async (items) => {
      const authToken = localStorage.getItem("accessToken");
      
      // Wrap items in an object
      return await axios.post(
        "http://localhost:8000/cart/addtocart",
        { items }, // Send an object with items
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  // Handle add to cart with quantity
  const handleAddToCart = (product) => {
    const quantity = 1; // Set the quantity, can be modified later
    const itemsToAdd = [{
      productId: product._id,
      itemName: product.itemName,
      itemPrice: product.itemPrice,
      quantity,
      totalPrice: product.itemPrice * quantity, // Calculate total price based on quantity
    }];
    addToCart.mutate(itemsToAdd); // Pass the array to mutate
  };

  // Loading and error states
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
            onClick={() => queryClient.invalidateQueries(["products"])}
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
      <Container>
        <Box sx={{mt:3,mb:3}}>
          <TextField label="Search items" variant="standard" fullWidth value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} sx={{mb:2}}/>
        </Box>
      </Container>
      <Container>
        <Typography variant="h4" gutterBottom>
          Shop
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card>
                <Link to={`/productdetails/${product._id}`}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:8000${product.imageUrl[0]}`}
                    alt={product.itemName}
                  />
                </Link>
                <CardContent>
                  <Typography variant="h6">{product.itemName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.itemPrice}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stock: {product.stocks}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => handleAddToCart(product)}
                    sx={{ mt: 1 }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
