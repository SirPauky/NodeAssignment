//This module provides a way to interact with the file system. An example application of this module would be to read or write files on the disk.
const fs = require('fs');

// Reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
