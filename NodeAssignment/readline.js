//This module provides a way to read input from a terminal. An example application of this module would be to create a command-line interface for a Node.js application.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Welcome, what is your name?! ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
