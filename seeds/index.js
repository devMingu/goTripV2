const mongoose = require('mongoose');
const Userdata = require('../model/userModel/userData');
// mongoose.connect('mongodb://localhost:27017/goTrip');
mongoose.connect("mongodb+srv://wintermingu12:!Mrlaalsrn12@dbgotripuser.enhtf48.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const seedDB = async () =>{
    // const data = new Userdata({
    //     userAge: 25,
    // })
    // await data.save();
    // console.log(data);
    // await Userdata.deleteMany();
}

seedDB().then(() => {
    mongoose.connection.close();
})