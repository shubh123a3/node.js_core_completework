//importing and excessing the file
const fs = require('fs')
const path= require('path')
fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if(err) throw err; //throw keyword is use as an output 
    console.log(data)
})
console.log('hello.....')//will print first becuse async
fs.writeFile(path.join(__dirname,'files','reply.txt'),'hi massage recived bro',(err)=>{
    if(err) throw err; //throw keyword is use as an output 
    console.log('write done bro')
    fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n yes it is',(err)=>{
        if(err) throw err; //throw keyword is use as an output 
        console.log('append file done')//append update the content of file

        fs.rename(path.join(__dirname,'files','reply.txt'),
        path.join(__dirname,'files','reply9.txt'),(err)=>{
            if(err) throw err; //throw keyword is use as an output 
            console.log('append file done')//append update the content of file
    })
    })
})

//exist on unchought error
process.on('unchought error',err=>{
    console.error(`there was an unchought eroor : ${err}`)
    process.exit(1)//terminate the projects
})
