const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_KEY,
    api_key: process.env.CLOUDINARY_SECRET,
    api_secret: process.env.CLOUD_NAME,
})

module.exports = cloudinary;
