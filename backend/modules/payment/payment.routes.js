const express = require("express");
const payment = require("./payment");


const paymentRouter = express.Router();


paymentRouter.post("/payment",payment)

module.exports = paymentRouter;


