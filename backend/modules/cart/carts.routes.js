const express = require("express");
const addtoCart = require("./controllers/AddToCart");
const auth = require("../../middlewares/auth");

const cartRouter = express.Router();

cartRouter.post("/addtocart",auth,addtoCart);

module.exports = cartRouter;