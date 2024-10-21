const fs = require('fs');
const path = require('path');
const multer = require("multer");

// Define the path for the upload directory
const uploadDirectory = path.join(__dirname, '../uploads/products');

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Configure multer to handle multiple file uploads
const upload = multer({ storage });

module.exports = upload;
