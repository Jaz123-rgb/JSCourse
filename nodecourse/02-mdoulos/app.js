//formas de manejar lso comando del sistema operativo 
//const os = require('os');
//var memoryfree = os.freemem();
//var  allmemory = os.totalmem();
//console.log(`Free Memory ${memoryfree}`);
//console.log(`total memory ${allmemory}`);

//Cuando se habaln de evntos regukarnete habala sobre acciones
// en especifico puedo asiganarle acciones a esos eventos  
//const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);

//? Modlo de eventos 
const EventEmitter = require('events');
const emiter =  new EventEmitter();

//Register ek listener 
emiter.on('msglon', (arg) => {
    console.log('lsitener llamado...', arg);
});

//Regsitrar el event 
emiter.emit('msglon', {
    id:1,
    url:'http://test.com'
});


