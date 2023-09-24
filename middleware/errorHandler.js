const {logEvents}= require('./logEevent')
const errorHandler= (err,req,res,next)=>{
    logEvents(`${err.name}:${err.message}`,'errlog.txt');
    console.log(err.stack)
    res.status(500).send(err.message)
    
}
module.exports=errorHandler;