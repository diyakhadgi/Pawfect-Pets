const mongoose = require("mongoose");

const addProduct = async (req, res) => {
  const {
    itemName,
    itemPrice,
    stocks,
    expiryDate,
    manufactureDate,
    colors,
    typeOfItem,
  } = req.body;

  console.log("Request: ", req.body);

  // Access multiple uploaded files
  const productImages = req.files;

  console.log("Product details:", req.body);
  console.log("Uploaded files:", productImages);

  // Check if images are uploaded
  if (!productImages || productImages.length === 0) {
    console.log("No images uploaded.");
    return res.status(400).json({ message: "No images uploaded." });
  }

  try {
    // Validate required fields
    if (!itemName || !itemPrice) {
      console.log("Validation failed: Missing item name or price.");
      return res.status(400).json({ message: "Please provide item name and price" });
    }

    // Convert string values to appropriate types
    const parsedItemPrice = parseFloat(itemPrice);
    const parsedStocks = parseInt(stocks);

    // Ensure colors is parsed from JSON if it's in string format
    const parsedColors = JSON.parse(colors);

    // Prepare product data
    const productData = {
      itemName,
      itemPrice: parsedItemPrice,
      stocks: parsedStocks,
      color: parsedColors,
      typeOfItem,
      imageUrl: productImages.map((file) => file.path), // Save image paths
    };

    // Handle optional dates
    if (expiryDate) productData.expiryDate = new Date(expiryDate);
    if (manufactureDate) productData.manufactureDate = new Date(manufactureDate);

    // Add logic to store product in the database
    const Products = mongoose.model("products");
    const createProduct = await Products.create(productData);
    console.log("Product successfully created:", createProduct);

    // Return success response and exit the function
    return res.status(200).json({ status: "Successfully added to the database" });
  } catch (error) {
    console.error("Error occurred while adding product:", error);
    // Handle errors and return failure response
    return res.status(400).json({
      status: "Product creation failed",
      message: error.message || error, // Ensure we send a meaningful error message
    });
  }
};

module.exports = addProduct;
