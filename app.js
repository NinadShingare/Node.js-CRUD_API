const express = require('express');
const app= express();
const studentRoute = require('./api/routes/student');
const animalsRoute = require('./api/routes/animals');
const facultyRoute = require('./api/routes/faculty');
 
const mongoose=require('mongoose');
//bodyparser recieves the data posted from frontend
const bodyParser= require('body-parser');

mongoose.set('strictQuery', false);
//special characters in passwords are encoded

mongoose.connect('mongodb+srv://abc:abc@cluster0.abc.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});
//please don't use above uri, paste your own mongodb uri

mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log("connected with database");
    
});

//we can also pass the data through url
app.use(bodyParser.urlencoded({extended:false}));
//converts the passed data to json format
app.use(bodyParser.json());


app.use('/student', studentRoute);
app.use('/faculty', facultyRoute); 
app.use('/animals', animalsRoute); 

//if user enters invalid url
app.use((req,res,next)=>{
    res.status(404).json({
        error:'Url not found '
    })
})


module.exports= app;


//nodemon server.js
