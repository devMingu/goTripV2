const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_HEROKU_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_HEROKU_KEY,
    api_secret: process.env.CLOUDINARY_HEROKU_SECRET,
})

module.exports = cloudinary;
