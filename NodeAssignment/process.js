//This module provides information about the Node.js process. An example application of this module would be to get the command-line arguments or to exit the process with a specific exit code.

console.log(`Node.js version: ${process.version}`);
console.log(`Current directory: ${process.cwd()}`);
process.on('exit', code => {
  console.log(`Exiting with code ${code}`);
});
process.on('uncaughtException', error => {
  console.error(`Uncaught exception: ${error.message}`);
  process.exit(1);
});
