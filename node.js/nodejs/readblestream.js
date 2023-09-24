const { error } = require('console')
const {CreatReadStream}= require('fs')
const stream = CreatReadStream('.content/bigfile.txt',{
    highWaterMark: 9000,
    encoding : 'utf8'
})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>console.log(err))