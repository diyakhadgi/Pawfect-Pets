import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import the shopping cart icon
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const authToken = localStorage.getItem("accessToken");
        const response = await fetch("http://localhost:8000/product/getallProducts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Shop
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Link to={`/productdetails/${product._id}`}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:8000${product.imageUrl[0]}`}
                    alt={product.itemName}
                    sx={{ objectFit: "cover" }}
                  />
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
                      startIcon={<ShoppingCartIcon />} // Use shopping cart icon here
                      sx={{ mt: 1 }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
