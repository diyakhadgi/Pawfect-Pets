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
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Navbar from "../components/Navbar";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/product/getProducts"
        ); // Adjust the endpoint as needed
        const data = await response.json();
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
              <Card>
                <CardMedia
                  component="img"
                  height="200" // Set a fixed height
                  image={`http://localhost:8000${product.imageUrl[0]}`} // Assuming the imageUrl is stored correctly
                  alt={product.itemName}
                  sx={{ objectFit: "cover" }} // Ensures the image covers the area without distortion
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
                    startIcon={<BookmarkAdd />}
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
