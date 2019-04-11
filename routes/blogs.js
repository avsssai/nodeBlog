const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/firstBlog',(req,res)=>{
    res.sendFile(path.join(__dirname+'/blogs/blog1/blog1.html'));
})
module.exports =router;