const Dog = require('../../../models/dog.model');

const adoptDog = async(req,res)=>{
    try {
        const dog = await Dog.findById(req,params.id);
        if(!dog || dog.adopted){
            return res.status(400).json({message:'Dog not available for adoption;'})
        }
        dog.adopted = true;
        await dog.save();
        res.status(200).json({message:'Dog adopted succesfully'});
    } catch (error) {
        res.status(500).json({message:'Server error'});
    }
}
module.exports = {adoptDog};