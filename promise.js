//importing and excessing the file
const fspromises = require('fs').promises

const { readFile } = require('fs');
const path= require('path')

const fileOps=async()=>{ // function asyn() created
    try{
        const data= await fspromises.readFile(path.join(__dirname,'files','starter.txt'),'Utf8');
        console.log(data);
    }
    
    catch (err){
       console.error(err)
    }

}
fileOps()