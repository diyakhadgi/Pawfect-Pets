const jwt = require('jsonwebtoken');
const auth = (req,res,next) =>{
    console.log(req.headers);
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            status:"Failed",
            message:"Authorization Failed! No token Found"
        })
        return;
    }

    //checking headers
    const token = authorization.split("Bearer ")[1];
    try {
        const checkToken = jwt.verify(token.process.env.jwt_salt);
        req.user = checkToken;
        console.log("Token Parsed: ",req.user);
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"Authroization Failed! Invalid Token"
        })
        return;
    }
    next();
}
module.exports = auth;