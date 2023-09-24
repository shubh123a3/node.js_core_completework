const http  = require('http')//server creaton
const server = http.createServer((req,res)=>{
    if(req.url ==='/')
    {
       res.end(`welcome to home page bro ,
       come have a tea`)
    }
     if(req.url ===`/about`)
    {
       res.end(`about page`)
       
    }
   
    res.end("error page"
       
   )

})
server.listen(5000,()=>{
    console.log("server is listing on port 5000....")
})