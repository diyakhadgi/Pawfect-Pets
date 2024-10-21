const mongoose = require('mongoose');

const addToCart = async (req, res) => {
    const Cart = mongoose.model('Cart');
  const { userId, items } = req.body;

  try {
    // Validate required fields
    if (!userId) throw new Error('User ID is required');
    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error('Items are required and should be an array');
    }

    // Create the cart
    const cartCreate = await Cart.create({
      userId,
      items
    });

    // Send success response
    res.status(200).json({
      status: "Added to cart successfully",
      cart: cartCreate
    });
  } catch (error) {
    // Send error response
    res.status(400).json({
      status: "Add to cart failed",
      message: error.message
    });
  }
};

module.exports = addToCart;
