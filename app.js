const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// import Routes
const userRouter = require('./routes/user.router');

//ROUTES
app.use('/user', userRouter);

app.get('/',(req,res) => {
    res.send('We are on Home');
});


//Connect TO DB

mongoose.connect('mongodb://localhost:27017/ExpressDb',() =>{
    console.log('Connected to DB!')
});
// How to we start listening to the server

app.listen(4000);