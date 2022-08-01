const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const port = process.env.PORT || 3030;
// const mongoose = require('mongoose');
// const Userdata = require('./model/userModel/userData');
// mongoose.connect('mongodb://localhost:27017/goTrip');
// mongoose.connect(process.env.MONGO_DB);
// mongoose.connect("mongodb+srv://wintermingu12:!Mrlaalsrn12@dbgotripuser.enhtf48.mongodb.net/?retryWrites=true&w=majority");
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const location = {
    '유럽': 'europe',
    '아시아': 'asia',
    '미국': 'united state',
    '지중해' : 'mediterraneanSea',
    '서울' : 'seoul',
    '도쿄' : 'tokyo',
    '트롬소': 'tromso'
}

app.get('/goTrip', (req, res)=>{
    res.render('trip/home');
})
app.get('/goTrip/search', (req, res)=>{
    res.render('trip/search');
})
app.get('/goTrip/asia', (req, res)=>{
    res.render('trip/asia');
})
app.get('/goTrip/europe', (req, res)=>{
    res.render('trip/europe');
})
app.get('/goTrip/seoul', (req, res)=>{
    res.render('trip/seoul');
})
app.get('/goTrip/tokyo', (req, res)=>{
    res.render('trip/tokyo');
})
app.get('/goTrip/tromso', (req, res)=>{
    res.render('trip/tromso');
})
app.get('/goTrip/movieTour', (req, res)=>{
    res.render('trip/movie');
})
app.get('/goTrip/register', (req, res)=>{
    res.render('trip/register');
});
app.get('/goTrip/homeJapan', (req, res)=>{
    res.render('homeCountry/homeJapan');
});

// app.post('/goTrip/register', async (req, res)=>{
//     const data = new Userdata(req.body.user);
//     await data.save();
//     res.render("trip/userInfo", {data: req.body.user});
// })
app.get('/goTrip/mediterraneanSea', (req, res)=>{
    res.render('trip/mediterraneanSea');
})
app.post('/goTrip', (req, res)=>{
    const loc = req.body.search.location;
    res.redirect(`/goTrip/${location[loc]}`);
})


app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`);
})