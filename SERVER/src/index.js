const port = process.env.PORT ?? 8080;
const io = require("socket.io")(port, {
  cors: ["http://localhost:5173"],
});

server.on("connection", (socket) => {
  console.log(`>> Connected to ${socket.id}`);
  socket.on("message", (message) => {
    socket.send();
  });
});

