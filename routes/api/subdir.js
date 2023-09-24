const express = require('express');
const { Module } = require('module');
const router=express.Router();
const path = require('path')
router.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname,'..', 'views','subdir', 'index.html'));
});
router.get('/test(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','subdir'))
})
module.exports= router