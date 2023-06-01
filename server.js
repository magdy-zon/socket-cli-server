const { Server } = require("socket.io");
const express = require("express");
const { createServer } = require("http");



// Server
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  socket.on('timeslot_selected', (data) => { 
    console.log(data);
  });

  socket.on('timeslot_deselected', (data) => { 
    console.log(data);
  });
});

httpServer.listen(3000);
