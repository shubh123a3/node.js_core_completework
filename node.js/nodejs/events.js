const EventEmitter =    require("events")//import
const customEmitter =new EventEmitter()
const cuatomEmitter=new EventEmitter
customEmitter.on('response',(name,id)=>{
    console.log(`data recived of user ${name} with ${id}`)
})
customEmitter.emit('response','john',34)
 