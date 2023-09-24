const http = require('http')
const server = http.createServer((req,res)=>{
     if(req.url==='/')
     {
        res.end(`welcome to home page bro ,
        come have a tea`)
     }
      if(req.url===`/about`)
     {
        res.end(`here is our short histrory bro`)
     }
    
     res.end(`
        <h1>opps bro!!!!!</h1>
        <p>we cant  seem to find  the page you  are looking </p>
        <a herf="/">back home</a>`
    )

})
server.listen(5000)
