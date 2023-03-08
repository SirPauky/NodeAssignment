//This module provides a way to compress and decompress data using zlib. An example application of this module would be to compress HTTP responses or to decompress data that has been compressed with gzip.

const zlib = require('zlib');
// Compress a string
const inputString = 'Hello, world!';
zlib.deflate(inputString, (err, buffer) => {
  if (!err) {
    console.log(`Compressed data: ${buffer.toString('base64')}`);
  }
});
// Decompress a buffer
const compressedData = Buffer.from('eJwrykrKzszPAQAJJgED', 'base64');
zlib.unzip(compressedData, (err, buffer) => {
  if (!err) {
    console.log(`Decompressed data: ${buffer.toString()}`);
  }
});
