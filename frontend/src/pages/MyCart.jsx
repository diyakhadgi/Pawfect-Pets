import axios from 'axios';
import Navbar from '../components/Navbar';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const fetchCart = async () => {
  const authToken = localStorage.getItem("accessToken");
  

  const response = await axios.get("http://localhost:8000/cart/getcart", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  
  console.log("API Response Data:", response.data);
  
  // Return cart data or fallback to default
  return response.data.cart || { items: [], totalPrice: 0 };
};

export default function MyCart() {
  const queryClient = useQueryClient();
  const { isLoading, error, data: cart = { items: [], totalPrice: 0 } } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
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
            onClick={() => queryClient.invalidateQueries(["cart"])}
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
        <Typography variant="h4" gutterBottom>
          My Cart
        </Typography>
        <Grid container spacing={3}>
          {Array.isArray(cart.items) && cart.items.length > 0 ? (
            cart.items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.productId}>
                <Card>
                  <Link to={`/productdetails/${item.productId}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.imageUrl ? `http://localhost:8000${item.imageUrl[0]}` : "/placeholder.jpg"}
                      alt={item.itemName}
                    />
                  </Link>
                  <CardContent>
                    <Typography variant="h6">{item.itemName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.itemPrice}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary" mt={2}>
              No items in the cart.
            </Typography>
          )}
        </Grid>
        <Typography variant="h5" mt={4}>
          Total Price: ${cart.totalPrice}
        </Typography>
      </Container>
      <Container>
        <Button>Checkout</Button>
      </Container>
    </>
  );
}
