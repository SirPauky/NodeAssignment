//This module provides a way to create HTTP servers and clients. An example application of this module would be to create a web server that responds to HTTP requests.

const http = require('http'); // Creating an HTTP server

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
