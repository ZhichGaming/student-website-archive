"use strict"

const port = process.env.PORT ?? 8080;
const io = require("socket.io")(port);

io.on("connection", (socket) => {
  console.log(`>> Connected to ${socket.id}`);

  socket.on("login", ({ username, password }) => {
    console.log(username, password)
  })
});

