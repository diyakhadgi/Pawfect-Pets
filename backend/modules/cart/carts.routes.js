const express = require("express");
const addtoCart = require("./controllers/AddToCart");
const auth = require("../../middlewares/auth");
const getCartInfo = require("./controllers/GetCartInfo");

const cartRouter = express.Router();

cartRouter.post("/addtocart",auth,addtoCart);
cartRouter.get("/getCart",auth,getCartInfo);

module.exports = cartRouter;