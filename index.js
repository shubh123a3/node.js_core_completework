const logEvent = require('./middleware/logEvents')
const eventEmiter=require('events')
class Emitter extends eventEmiter{};
//intiatizion of a n object
const myEmitter = new Emitter()
//adding listener for log event 
myEmitter.on('log',(msg)=>logEvent(msg))
setTimeout(() => {
    myEmitter.emit('log','log event  emitted ')
    
}, 2000);