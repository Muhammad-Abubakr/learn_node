const EventEmitter = require('events');

const emitter = new EventEmitter()


emitter.on('response', () => {
    console.log('Event Received');
})


emitter.emit('response');