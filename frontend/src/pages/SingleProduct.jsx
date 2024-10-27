import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import BreadCrumbs from "../components/BreadCrumbs";

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null); // State to hold the product data

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const authToken = localStorage.getItem('accessToken');
                const response = await fetch(`http://localhost:8000/product/getSingleProduct/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken}` // Add the token here
                    }
                });

                const data = await response.json();
                setProduct(data); // Store the fetched product data in state
            } catch (error) {
                console.error("Error occurred", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>; // Display a loading state while fetching data
    }

    return (
        <>
            <Navbar />
      <BreadCrumbs/>
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
                        <Typography variant="h6">
                            Price: ${product.itemPrice}
                        </Typography>
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
