//This module provides a way to schedule code execution at a specific time or interval. An example application of this module would be to set a timeout for.

// Using setTimeout()
console.log('Starting...');
setTimeout(() => {
  console.log('Timeout elapsed');
}, 2000);

// Using setInterval()
let counter = 1;
const intervalId = setInterval(() => {
  console.log(`Counter: ${counter}`);
  counter++;
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);
