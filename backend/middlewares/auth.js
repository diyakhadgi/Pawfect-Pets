const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Retrieve the authorization header
    const authorization = req.headers.authorization;
    
    if (!authorization) {
        return res.status(401).json({
            status: "Failed",
            message: "Authorization Failed! No token found."
        });
    }

    // Extract the token from the "Bearer <token>" format
    const token = authorization.split("Bearer ")[1];
    
    if (!token) {
        return res.status(401).json({
            status: "Failed",
            message: "Authorization Failed! No token found."
        });
    }

    try {
        // Verify the token using the secret key
        const checkToken = jwt.verify(token, process.env.jwt_secret_key);
        req.userId = checkToken; // Attach the user ID from the token to the req object
        console.log(req.userId);
        console.log('Auth Checked');
        next(); // Call next only if the token is valid
    } catch (error) {
        return res.status(401).json({
            status: "Failed",
            message: "Authorization Failed! Invalid token."
        });
    }
};

module.exports = auth;
