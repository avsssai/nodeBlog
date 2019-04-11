const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogs = require('./routes/blogs');

let app = express();
mongoose.connect('mongodb://localhost:27017/node-blog',{useNewUrlParser:true})
    .then(()=>{
        console.log('connected to the database successfully!');
    },
    err=>{
        console.log('The error in connecting to the database is ' +err);
    });

app.use(express.static('public'));
app.use('/blogs',blogs);    

const PORT = process.env.PORT || 3400;
 app.listen(PORT,()=>{
     console.log(`Connected to port : ${PORT}`);
 })