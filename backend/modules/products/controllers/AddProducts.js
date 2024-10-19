const mongoose = require("mongoose");

const addProduct = async(req,res) => {
  const Products = mongoose.model("products");
  const { itemName, itemPrice, stocks, expiryDate, color, typeOfItem } =
    req.body;
    try {
        if (!itemName) throw 'Please provide item name';
        if(!itemPrice) throw 'Please provide item price';
        const createProduct = await Products.create({
            itemName,
            itemPrice,
            stocks,
            expiryDate,
            color,
            typeOfItem
        })
    } catch (error) {
        res.status(400).json({
            status:"Products failed to enter",
            message:error.message
        })
        return;
    }

    res.status(200).json({
        status:"Succesfully entered in Db"
    })
};
module.exports = addProduct;