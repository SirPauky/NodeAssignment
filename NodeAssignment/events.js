//This module provides a way to handle and emit events. An example application of this module would be to create a custom event emitter for a Node.js application.

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Attaching a listener to an event
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

// Emitting an event
myEmitter.emit('event');
