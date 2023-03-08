//This module provides a way to work with streams of data. An example application of this module would be to create a streaming API for a Node.js application.

var fs = require("fs");

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable = fs.createReadStream(
  'tmp/test.txt', {encoding: 'utf8'});
logChunks(readable);

// Output:
// 'This is a test!\n'