require('dotenv').config();

 
const stripe = require("stripe")(process.env.stripe_secret_key);

const payment = async (req, res) => {
    const { products } = req.body; // products is an object containing items array
    console.log("Products: ",products)
    const lineItems = products.items.map((product) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.itemName,
            },
            unit_amount: product.itemPrice * 100,
        },
        quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
};

module.exports = payment;

