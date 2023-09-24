const http =  require('http')
//using event emiter api
const server =http.createServer
server.on('request',(req,res)=>{
    res.end('welcome')// printstatement
})