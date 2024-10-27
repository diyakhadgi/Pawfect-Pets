const adminDashboard =(req,res)=>{
    res.status(200).json({
        status:"YOu have reached admin Dashboard"
    })
    return;
};
module.exports = adminDashboard;