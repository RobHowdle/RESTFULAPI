const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

//DATABASE CONNECT
mongoose.connect(
    process.env.DB_CONNECTION, 
{useNewUrlParser: true}, 
() => console.log('connected to DB!')
);

//SERVER LISTENING PORT
app.listen(3000);