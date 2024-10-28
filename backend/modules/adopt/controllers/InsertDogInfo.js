const Dog = require('../../../models/dog.model');

const insertDogInfo = async(req,res)=>{
    const{name,breed,age,healthStatus,description}= req.body;

    const dogImage = req.files;
    
    if(!dogImage || dogImage.length === 0){
        return res.status(400).json({message:"No image uploaded."})
    }

    try{
        if(!name || !breed) return res.status(400).json({message: "Please provide name and breed"});

        const dogData = {
            name,breed,age,healthStatus,description,imageUrl:dogImage.map((file)=> '/uploads/dogs/' + file.filename)
        }
        const createDog = await Dog.create(dogData);
        return res.status(200).json({status:"Succesfully added to database"});
    }catch(error){
        return res.status(400).json({
            status:"Product creation failed",
            message:error.message || error,
        })
    }
}
module.exports = insertDogInfo;