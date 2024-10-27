const Products = require('../../../models/products.model'); // Adjust the path as necessary

const getProduct = async (req, res) => {
    try {
        const products = await Products.find();

        if (products.length === 0) {
            return res.status(404).json({
                message: "No Products found"
            });
        }
        return res.status(200).json(products);
    } catch (error) {
        console.log("Error Fetching products:", error);
        return res.status(500).json({
            message: "Server error. Couldn't retrieve products"
        });
    }
};

module.exports = { getProduct };
