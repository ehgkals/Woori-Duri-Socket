import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let userStatus = [
  { id: 1, ip: "192.168.219.104", status: "offline" },
  { id: 2, ip: "192.168.219.112", status: "offline" },
];

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("userIP", (ip) => {
    console.log("User IP: ", ip);

    userStatus = userStatus.map((seat) => {
      if (seat.ip === ip) seat.status = "online";
      return seat;
    });

    io.emit("userStatus", userStatus);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Socket.io server is running" });
});

server.listen(4000, () => {
  console.log("Socket.io server started on port 4000");
});
