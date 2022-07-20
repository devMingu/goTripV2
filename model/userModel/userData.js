const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userFirstName: String,
    userLastName: String,
    userSex: String,
    userAge: Number,
    userEmail: String,
    userProfileImage: String,
    userCountry: String,
});

const Userdata = mongoose.model('Userdata', UserSchema);

module.exports = Userdata;
