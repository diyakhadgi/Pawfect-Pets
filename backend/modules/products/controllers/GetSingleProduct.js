const Products = require("../../../models/products.model");

const getSingleProduct=async(req,res)=>{
    try{
        const productId = req.params.id;
        const products = await Products.findById(productId);;
        if(products.length === 0 ){
            return res.status(404).json({
                message: "No products found"
            });
        }
        return res.status(200).json(products);
    }catch(error){
        console.error("Error fetching products: ",error);
        return res.status(500).json({
            message: "Server error. Couldn't retrieve products"
        });
    }
};

module.exports = {getSingleProduct};