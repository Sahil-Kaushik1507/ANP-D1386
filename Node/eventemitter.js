const EventEmitter = require('events');

// import EventEmitter from 'events';

const event = new EventEmitter();


event.on('sayhello', (name)=>{

    console.log("Hello..." + name)
})


event.emit('sayhello',"abc");