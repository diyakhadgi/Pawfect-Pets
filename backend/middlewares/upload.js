const fs = require('fs');
const path = require('path');
const multer = require("multer");

// Define paths for different upload directories
const productUploadDirectory = path.join(__dirname, '../uploads/products');
const dogUploadDirectory = path.join(__dirname, '../uploads/dogs');

// Create directories if they don't exist
if (!fs.existsSync(productUploadDirectory)) {
    fs.mkdirSync(productUploadDirectory, { recursive: true });
}
if (!fs.existsSync(dogUploadDirectory)) {
    fs.mkdirSync(dogUploadDirectory, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set directory based on route
        const uploadPath = req.baseUrl.includes('products') ? productUploadDirectory : dogUploadDirectory;
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Configure multer to handle multiple file uploads
const upload = multer({ storage });

module.exports = upload;
