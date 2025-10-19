// Importing the Express app from another file (./src/app)
// This file probably contains your Express setup like routes, middlewares, etc.
const app = require('./src/app');  

// Importing 'createServer' method from Node.js built-in 'http' module
// This helps us create an HTTP server that can work with both Express and Socket.io
const { createServer } = require("http");  

// Importing 'Server' class from 'socket.io' package
// This allows real-time, bi-directional communication between server and clients
const { Server } = require("socket.io");  


// Creating an HTTP server and attaching our Express app to it
// This means both normal HTTP requests and Socket.io connections can use the same server
const httpServer = createServer(app);  

// Creating a new instance of Socket.io and connecting it with our HTTP server
const io = new Server(httpServer);


// Listening for a new client connection to Socket.io
// 'connection' event triggers whenever a new user connects to the WebSocket
io.on("connection", (socket) => {
  // Inside this block, you can handle events for that connected client
  // For example: sending messages, broadcasting updates, etc.
  console.log("A user connected");
});


// Finally, starting the HTTP + Socket.io server on port 3000
httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
