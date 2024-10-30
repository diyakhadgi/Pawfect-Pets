const Cart = require('../../../models/carts.model');

const getCartInfo = async(req,res)=>{

    try{
        const userId = req.userId;
        const cart = await Cart.findOne({userId}).populate("items.productId","itemName itemPrice");

        if(!cart){
            return res.status(404).json({message:"Cart not found"});
        }

        res.status(200).json({
            cart:{
                items: cart.items.map((item)=>({
                    productId: item.productId._id,
                    itemName:item.productId.itemName,
                    itemPrice:item.productId.itemPrice,
                    quantity:item.quantity,
                })),
                totalPrice:cart.items.reduce((total,item)=> total + item.productId.itemPrice * item.quantity,0),
            },
        });
    }catch(error){
        res.status(500).json({
            message:"An Error has occured while retriving the cart info"
        })
    }
}
module.exports = getCartInfo;