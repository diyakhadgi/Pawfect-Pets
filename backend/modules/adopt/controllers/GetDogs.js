const Dog = require('../../../models/dog.model');
const getAllDogs = async (req,res)=>{
    try{
        const dogs = await Dog.find({adopted:false});
        res.status(200).json(dogs);
    }catch(error){
        res.status(500).json({message: 'Server Error'});
    }
}
module.exports = {getAllDogs};