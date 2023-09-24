const fs = require('fs')
const rs = fs.createReadStream('./files/loream.txt',{encoding:'utf8'})
const ws = fs.createWriteStream('./files/new_loream.txt')

//anothermenthod
rs.pipe(ws)
/*rs.on('data0',(dataChunk)=>{
     ws.write(dataChunk)              //this was a menthod
})*/