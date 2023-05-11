const { WebSocketServer } = require("ws");
const port = process.env.PORT ?? 8080;
const server = new WebSocketServer({ port });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.send(`${message}`);
  });
});

