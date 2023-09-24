const express= require('express')
const app =express()
 const path =require('path')
const http= require('http')
const PORT = process.env.PORT||3500;

app.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});
//res.sendFile('./views/index.html', { root: __dirname });
app.get('/new-page(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
});
app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301, '/new-page.html'); //302 by default
});




app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
