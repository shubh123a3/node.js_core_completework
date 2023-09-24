const fs = require('fs')
if(!fs.existsSync('./new'))
fs.mkdir('./new',(err)=>{
    console.log('directory created')
})
if(fs.existsSync('./new'))
{
    fs.rmdir('./new',(err)=>{
        console.log('direcroy removed')
    })
}