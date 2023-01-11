const express = require('express');
const session = require('express-session');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Userdata = require('./model/userModel/userData');
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL);
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
app.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

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
    res.render('trip/home');
})
app.get('/goTrip/search', (req, res)=>{
    req.session["userID"] ? res.render(`trip/search`, {title:"로그아웃", ref:`/goTrip/userInfo/${req.session["userID"]}`, subTitle: "내 정보"}) : res.render('trip/search', {title: "회원가입", ref:"/goTrip/movieTour", subTitle: "영화 어디서 찍었지?"});
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
    req.session["userID"] = data._id;
    await data.save();
    res.redirect(`/goTrip/userInfo/${data._id}`);
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
    req.session["userID"] = userData[0]._id;
    res.redirect(`/goTrip/search`);
});
app.post('/goTrip/logout', async (req, res) => {
    console.log("LOGOUT");
    req.session.destroy();
    res.redirect('/goTrip/search');
})

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