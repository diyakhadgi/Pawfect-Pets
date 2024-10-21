const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    console.log(req.headers);
    const authorization = req.headers.authorization;
    
    if (!authorization) {
        return res.status(401).json({
            status: "Failed",
            message: "Authorization Failed! No token Found"
        });
    }

    // Checking headers
    const token = authorization.split("Bearer ")[1];
    
    try {
        const checkToken = jwt.verify(token, process.env.jwt_secret_key);
        req.user = checkToken;
        console.log("Token Parsed: ", req.user);
        next(); // Call next only if token is valid
    } catch (error) {
        return res.status(401).json({
            status: "Failed",
            message: "Authorization Failed! Invalid Token"
        });
    }
};

module.exports = auth;
