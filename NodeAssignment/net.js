//This module provides a way to create TCP servers and clients. An example application of this module would be to create a chat server that uses TCP sockets to communicate with clients

const net = require('net');
const server = net.createServer(socket => {
  console.log('Client connected');
  socket.on('data', data => {
    console.log(`Received data: ${data}`);
  });
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});
const port = 8000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
