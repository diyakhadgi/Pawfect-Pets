const Dog = require('../../../models/dog.model');

const getSingleDog = async (req,res)=>{
    try{
        const dog = await Dog.findById(req.params.id);
        if(!dog) return res.status(404).json({message:'Dog not Found'});
        res.status(200).json(dog);
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
}
module.exports = {getSingleDog};