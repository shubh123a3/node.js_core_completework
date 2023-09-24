const os =   require('os')// import file
const cureentos ={
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem  : os.freemem()
}
console.log(cureentos)