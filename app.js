const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const port = process.env.PORT || 3030;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const location = {
    '유럽': 'europe',
    '아시아': 'asia',
    '미국': 'united state',
    '지중해' : 'mediterraneanSea',
    '서울' : 'seoul'
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
app.get('/goTrip/movieTour', (req, res)=>{
    res.render('trip/movie');
})
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