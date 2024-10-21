import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Container, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Navbar from "../../components/Navbar";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddProducts() {
  const aT = localStorage.getItem('accessToken');
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [stocks, setStocks] = useState(1);
  const [expiryDate, setExpiryDate] = useState(null);
  const [manufactureDate, setManufactureDate] = useState(null);
  const [colors, setColors] = useState([]); // Change to an array for multiple colors
  const [typeOfItem, setTypeOfItem] = useState("");
  const [imageUrls, setImageUrls] = useState([]); // For handling multiple image URLs

  const today = dayjs();

  const handleExpiryDateChange = (newValue) => {
    setExpiryDate(newValue);
  };

  const handleManufactureDateChange = (newValue) => {
    setManufactureDate(newValue);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setImageUrls(urls);
  };

  const handleColorChange = (event) => {
    setColors(event.target.value);
  };

  const handleAddColor = () => {
    setColors([...colors, ""]); // Add an empty color input
  };

  const handleColorInputChange = (index, value) => {
    const newColors = [...colors];
    newColors[index] = value; // Update the specific index
    setColors(newColors);
  };

  const handleRemoveColor = (index) => {
    const newColors = colors.filter((_, i) => i !== index); // Remove color at the specific index
    setColors(newColors);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
  
    // Append form data
    formData.append("itemName", itemName);
    formData.append("itemPrice", itemPrice);
    formData.append("stocks", stocks);
    formData.append("expiryDate", expiryDate ? dayjs(expiryDate).toISOString() : "");
    formData.append("manufactureDate", manufactureDate ? dayjs(manufactureDate).toISOString() : "");
    formData.append("colors", JSON.stringify(colors)); // Make sure to send colors as JSON string
    formData.append("typeOfItem", typeOfItem);
  
    // Append all image files
    imageUrls.forEach((imageUrl, index) => {
      const imageFile = document.querySelector(`input[name="productImages"]`).files[index];
      formData.append("productImages", imageFile); // Append each image file
    });
  
    try {
      // Make POST request to the backend
      const response = await fetch("http://localhost:8000/product/addProducts", {
        method: "POST",
        body: formData, // Use formData as the body
        headers: {
          "Authorization": "Bearer " + aT
        }
      });
  
      const data = await response.json();
      console.log("Data",data); // Handle response from server
      if (response.ok) {
        toast.success('Product Added');
        setItemName("");
        setItemPrice("");
        setStocks(1);
        setExpiryDate(null);
        setManufactureDate(null);
        setColors([]);
        setTypeOfItem("");
        setImageUrls([]);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  
  

  return (
    <>
    <Navbar/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container component="main" maxWidth="xs">
        <Box mt={5} mb={3} >
            <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Item Price"
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="How many are in stock?"
            type="number"
            value={stocks}
            onChange={(e) => setStocks(e.target.value)}
          />
          <DatePicker
            label="Manufacture Date"
            value={manufactureDate}
            onChange={handleManufactureDateChange}
            maxDate={today} // Prevents selecting future dates
            renderInput={(params) => (
              <TextField {...params} variant="outlined" margin="normal" fullWidth />
            )}
          />
          <DatePicker
            label="Expiry Date"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            minDate={today} // Prevents selecting past dates
            renderInput={(params) => (
              <TextField {...params} variant="outlined" margin="normal" fullWidth />
            )}
          />
          {/* Color Inputs */}
          {colors.map((color, index) => (
            <Box key={index} display="flex" alignItems="center" mb={2}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={`Color ${index + 1}`}
                value={color}
                onChange={(e) => handleColorInputChange(index, e.target.value)}
              />
              <Button
                onClick={() => handleRemoveColor(index)}
                variant="contained"
                color="error"
                style={{ marginLeft: '8px' }}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button variant="outlined" onClick={handleAddColor} style={{ marginBottom: '16px' }}>
            Add Another Color
          </Button>
          <FormControl fullWidth margin="normal">
            <InputLabel id="type-of-item-label">Type of Item</InputLabel>
            <Select
              labelId="type-of-item-label"
              value={typeOfItem}
              onChange={(e) => setTypeOfItem(e.target.value)}
              required
            >
              <MenuItem value="toys">Toys</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="accessories">Accessories</MenuItem>
              <MenuItem value="house">House</MenuItem>
            </Select>
          </FormControl>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Product Image
            <VisuallyHiddenInput
              type="file"
              onChange={handleImageUpload}
              multiple
              name="productImages"
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Add Product
          </Button>
          </form>
        </Box>
      </Container>
      <ToastContainer/>
    </LocalizationProvider>
    </>
  );
}
