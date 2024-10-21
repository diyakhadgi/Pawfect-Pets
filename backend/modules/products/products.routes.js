const express = require("express");
const addProduct = require('./controllers/AddProducts')
const upload = require("../../middlewares/upload");
const auth = require("../../middlewares/auth");

const productsRouter = express.Router();

// Accept multiple files with the name 'productImages' in the form
productsRouter.post("/addProducts", upload.array('productImages', 5),auth,addProduct);
//auth
module.exports = productsRouter;
