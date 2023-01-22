const express = require('express');
const session = require('express-session');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const cloudinary = require('./cloudinary');
const multer = require('multer');
const uploader = require('./multer');
const methodoverride = require("method-override");
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Userdata = require('./model/userModel/userData');
const Tripdata = require('./model/userModel/userTrip');
const mongoURL = process.env.MONGODB_URI || "mongodb+srv://wintermingu12:!Mongodb19971212@dbgotripuser.enhtf48.mongodb.net/test";
mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

mongoose.set('strictQuery', true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(methodoverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// 
const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, 'uploads/');
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const fileName = `${path.basename(
          file.originalname,
          ext
        )}_${Date.now()}${ext}`;
        done(null, fileName);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  });
// 

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
app.post('/goTrip/search', (req, res) => {
    const loc = req.body.search.location;

    res.redirect(`/goTrip/${location[loc]}`);
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
    res.render('trip/login', {error: ""});
});
app.post('/goTrip/login', async (req, res)=>{
    const userData = await Userdata.find( {userEmail : `${req.body.user.userEmail}`});
    if (userData.length === 0) {
        res.render('trip/login', {error: "정확한 이메일을 입력해주세요"});
    }
    else {
        req.session["userID"] = userData[0]._id;
        res.redirect(`/goTrip/search`);
    }
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

app.get('/goTrip/recommandTrip', (req, res) => {
    res.render('usersPost/recommandTrip');
})
app.post('/goTrip/recommandTrip', upload.single('trip[tripPhotoPath]') ,async (req, res) => {
    const savedPhoto = await cloudinary.v2.uploader.upload(req.file.path);
    // console.log(savedPhoto.url);
    
    const postData = {
        userID: req.session["userID"],
        ...req.body.trip,
        tripPhotoPath: savedPhoto.url,
    };
    const tripData = new Tripdata(postData);
    await tripData.save();
    res.redirect(`/goTrip/myPost/${tripData.userID}`);
})
// app.post('/goTrip/recommandTrip', upload.single('trip[tripPhotoPath]') ,async (req, res) => {
//     // console.log(`Now Session is ${req.session["userID"]}`);
//     // const filePath = req.file.path.slice(7);
//     const getDateData = new Date();
//     const date = getDateData.getFullYear().toString() + (getDateData.getMonth()+1).toString() + getDateData.getDate().toString() + getDateData.getHours().toString() + getDateData.getMinutes().toString() + getDateData.getSeconds().toString();
//     const postData = {
//         userID: req.session["userID"],
//         reportingDate: parseInt(date),
//         ...req.body.trip,
//     };
//     // const postData = {
//     //     userID: req.session["userID"],
//     //     reportingDate: parseInt(date),
//     //     ...req.body.trip,
//     //     tripPhotoPath: filePath,
//     // };
//     // res.redirect("/goTrip");
//     const tripData = new Tripdata(postData);
//     await tripData.save();
//     // console.log(tripData);
//     // res.render("usersPost/tPost", {pathPhoto: filePath})
//     res.redirect(`/goTrip/myPost/${tripData.userID}`);
// })
app.get('/goTrip/tPost', (req, res) => {
    res.render("usersPost/tPost");
})
app.get('/goTrip/myPost/:id', async (req, res)=>{
    const { id } = req.params;
    const data = await Tripdata.find({ userID: id});
    const userName = await Userdata.find({ _id : id});
    res.render('usersPost/myPost', {data, name: userName[0].userNickName});
});
app.delete('/goTrip/myPost/:id', async (req, res) => {
    const { id } = req.params;
    const findDelete = await Tripdata.findByIdAndDelete(id);
    res.redirect(`/goTrip/myPost/${findDelete.userID}`);

})
app.get('/goTrip/allPost', async (req, res) => {
    const allPost = await Tripdata.find({});
    const loginID = req.session["userID"];
    res.render('usersPost/allUserPost', {allPost, loginID});
})



app.use('/', (req, res)=>{
    res.render('error/error', {error_loc: loc});
})

app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`);
})