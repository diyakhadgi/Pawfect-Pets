const express = require("express");
const addProduct = require("./controllers/AddProducts");
const auth = require("../../middlewares/auth");

const productsRouter = express.Router();

productsRouter.post("/addProducts", auth, addProduct);

module.exports = productsRouter;
