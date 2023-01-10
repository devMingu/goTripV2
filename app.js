const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Userdata = require('./model/userModel/userData');
mongoose.connect("mongodb+srv://wintermingu12:!Mrlaalsrn12@dbgotripuser.enhtf48.mongodb.net/test");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

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
let loc = "";

app.get('/', (req, res)=>{
    res.render('trip/home');
})
app.get('/goTrip', async (req, res)=>{
    // res.clearCookie(req.headers.cookie , { path : '/goTrip'});
    // if (req.headers.cookie) {
    //     const len = req.headers.cookie.length;
    //     const pathLog = req.headers.cookie.slice(3, len+1);
    //     console.log(pathLog);
    //     res.render('trip/home', {title: "로그아웃하기", pathId: `/goTrip/userInfo/${pathLog}`});
    // }
    // else {
    //     console.log("EOLLO");
    //     res.render('trip/home', {title: "서치하기", pathId: "/goTrip/search"});
    // }
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
app.get('/goTrip/mediterraneanSea', (req, res)=>{
    res.render('trip/mediterraneanSea');
})
app.get('/goTrip/tromso', (req, res)=>{
    res.render('trip/tromso');
})
app.get('/goTrip/canada', (req, res)=>{
    res.render('trip/canada');
})
app.get('/goTrip/movieTour', (req, res)=>{
    res.render('trip/movie');
})
app.get('/goTrip/tripContent', (req, res)=>{
    res.render('trip/tripContent');
})

app.get('/goTrip/register', (req, res)=>{
    res.render('trip/register');
});
app.post('/goTrip', async (req, res)=>{
    const data = new Userdata(req.body.user);
    await data.save();
    res.redirect(`/goTrip/userInfo/${data._id}`);
    // res.render("trip/userInfo", {data: req.body.user});
})
app.get('/goTrip/userInfo/:id', async (req, res) => {
    const {id} = req.params;
    const data = await Userdata.findById(id);
    res.render('trip/userInfo', {data});
})
app.get('/goTrip/login', (req, res)=>{
    res.render('trip/login');
});
app.post('/goTrip/login', async (req, res)=>{
    const userData = await Userdata.find( {userEmail : `${req.body.user.userEmail}`});
    // res.setHeader('Set-Cookie', `id=${userData[0]._id}; path=/goTrip`);
    res.redirect(`/goTrip`);
    // res.redirect(`/goTrip/userInfo/${userData[0]._id}`);
});

app.get('/goTrip/homeJapan', (req, res)=>{
    res.render('homeCountry/homeJapan');
});
app.get('/goTrip/homeKorea', (req, res)=>{
    res.render('homeCountry/homeKorea');
});
app.get('/goTrip/homeCanada', (req, res)=>{
    res.render('homeCountry/homeCanada');
});
app.get('/goTrip/homeAmerica', (req, res)=>{
    res.render('homeCountry/homeAmerica');
});
app.get('/goTrip/homeMolta', (req, res)=>{
    res.render('homeCountry/homeMolta');
});
app.get('/goTrip/homeNorway', (req, res)=>{
    res.render('homeCountry/homeNorway');
});
app.get('/goTrip/homeParis', (req, res)=>{
    res.render('homeCountry/homeParis');
});




app.use('/', (req, res)=>{
    res.render('error/error', {error_loc: loc});
})

app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`);
})