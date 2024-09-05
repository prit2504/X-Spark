const express = require('express');
// const { request } = require('http');
const mongoose = require('mongoose');
const path = require('path');

//models
const User = require('./models/User.js')


const app = express();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/views')))


// MongoDb connection

mongoose.connect('mongodb://localhost:27017/XSpark').then(() => {
    console.log("Connect to mongodb")
}).catch((err) =>{
    console.log("Failed to connect database...", err)
})

//index route

app.get("/", (req, res)=>{
    // res.send("Running");
    res.render('home');
});
app.get("/home", (req, res)=>{
    // res.send("Running");
    res.redirect('/');
});

//register

app.get("/register", (req, res)=>{
    res.send("Register running");
});

//login

app.get("/login", (req, res)=>{
    res.send("Login running");
});

app.listen(5000, () => {
    console.log("Server Running...");
});