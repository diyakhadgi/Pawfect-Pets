const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    // Check if the Authorization header is present
    const authHeader = req.header('Authorization');
    const token = authHeader ? authHeader.replace('Bearer ', '') : undefined;

    if (!token) {
        return res.status(401).send({ error: 'Authorization token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.jwt_secret_key);
        if (decoded.role !== 'admin') {
            return res.status(403).send({ error: 'Admin access denied' });
        }
        req.admin = decoded; // Store admin info in request for further use
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Invalid or expired token' });
    }
};

module.exports = adminAuth;
