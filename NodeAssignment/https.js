//This module provides a way to create HTTPS servers and clients. An example application of this module would be to create a secure web server that uses SSL/TLS encryption.

const https = require('https');
const options = {
  hostname: 'example.com',
  path: '/path/to/resource',
  method: 'GET'
};
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});
req.on('error', error => {
  console.error(error);
});
req.end();
