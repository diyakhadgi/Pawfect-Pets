import { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Container } from "@mui/material";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/product/getallProducts", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem('accessToken')
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProducts(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} mt={4}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              {console.log(product.imageUrl[0])}
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`http://localhost:8000${product.imageUrl[0]}`} 
                  alt={product.itemName}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.itemName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.itemPrice}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stock: {product.stocks}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expiry Date: {new Date(product.expiryDate).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" component="div">
            No products found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
