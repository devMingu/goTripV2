const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.use(express.static('public'));

app.get('/gotrip', (req, res)=>{
    res.render('trip/home');
})


app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`);
})