const mongoose = require('mongoose');
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

  const productImages = req.files;

  if (!productImages || productImages.length === 0) {
    return res.status(400).json({ message: "No images uploaded." });
  }

  try {
    if (!itemName || !itemPrice) {
      return res.status(400).json({ message: "Please provide item name and price" });
    }

    const parsedItemPrice = parseFloat(itemPrice);
    const parsedStocks = parseInt(stocks);
    const parsedColors = JSON.parse(colors);

    // Prepare product data with corrected image URLs
    const productData = {
      itemName,
      itemPrice: parsedItemPrice,
      stocks: parsedStocks,
      color: parsedColors,
      typeOfItem,
      imageUrl: productImages.map((file) => '/uploads/products/' + file.filename), // Fixed image URL
    };

    if (expiryDate) productData.expiryDate = new Date(expiryDate);
    if (manufactureDate) productData.manufactureDate = new Date(manufactureDate);

    const Products = mongoose.model("products");
    const createProduct = await Products.create(productData);

    return res.status(200).json({ status: "Successfully added to the database" });
  } catch (error) {
    return res.status(400).json({
      status: "Product creation failed",
      message: error.message || error,
    });
  }
};


module.exports = addProduct;
