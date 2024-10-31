const mongoose = require('mongoose');

const addToCart = async (req, res) => {
  const Cart = require('../../../models/carts.model');
  const {items } = req.body;
  const userId = req.userId; 
  // console.log("UserId",userId);
  // console.log("req.Body",req.body);

  try {
    if (!userId) throw new Error('User ID is required');
    console.log("UserId:",userId);
    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error('Items are required and should be an array');
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create new cart if it doesn’t exist
      cart = await Cart.create({ userId, items });
    } else {
      // Update existing cart by adding/updating items
      items.forEach(newItem => {
        const existingItem = cart.items.find(item => item.productId.equals(newItem.productId));
        if (existingItem) {
          existingItem.quantity += newItem.quantity || 1;
        } else {
          cart.items.push(newItem);
        }
      });
      await cart.save();
    }

    res.status(200).json({
      status: "Added to cart successfully",
      cart,
    });
  } catch (error) {
    res.status(400).json({
      status: "Add to cart failed",
      message: error.message,
    });
  }
};

module.exports = addToCart;
