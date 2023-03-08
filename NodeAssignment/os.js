//This module provides information about the operating system. An example application of this module would be to get the amount of free memory or the number of CPUs on the system.

const os = require('os');
// Getting the hostname
console.log('Hostname:', os.hostname());
// Getting the number of CPU cores
console.log('CPU cores:', os.cpus().length);
