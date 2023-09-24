const express = require('express');

const router=express.Router();
router.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname,'..', 'views', 'subdir', 'index.html'));
});

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views','subdir', 'new-page.html'));
    res.sendFile(path.join(__dirname, '..','public','css', 'stlye.css'));

});

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});
module.exports=router;