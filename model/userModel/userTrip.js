const mongoose = require('mongoose');


const TripSchema = new mongoose.Schema({
    userID: String,
    reportingDate: Number,  
    tripNickName: String,
    tripLocation: String, 
    tripImg: String,
    tripPhotoPath: String,
    tripDesc: String,
});

const Tripdata = mongoose.model('Tripdata', TripSchema);

module.exports = Tripdata;
