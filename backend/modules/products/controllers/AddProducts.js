const mongoose = require('mongoose');

const addProduct = async (req, res) => {
    const { itemName, itemPrice, stocks, expiryDate,manufactureDate, colors, typeOfItem } = req.body;
  
    // Access multiple uploaded files
    const productImages = req.files;
  
    console.log("Product details:", req.body);
    console.log("Uploaded files:", productImages);
  
    if (productImages.length === 0) {
      return res.status(400).json({ message: "No images uploaded." });
    }
  
    try {
      // Validate required fields
      if (!itemName || !itemPrice) {
        throw new Error('Please provide item name and price');
      }
  
      // Add logic to store product in the database, using req.body and req.files
      const Products = mongoose.model("products");
  
      const createProduct = await Products.create({
        itemName,
        itemPrice,
        stocks,
        expiryDate,
        manufactureDate,
        color: JSON.parse(colors),
        typeOfItem,
        imageUrl: productImages.map(file => file.path), // Save image paths
      });
  
      res.status(200).json({ status: "Successfully added to the database" });
    } catch (error) {
      res.status(400).json({ status: "Product creation failed", message: error.message });
    }
  };
module.exports = addProduct;  