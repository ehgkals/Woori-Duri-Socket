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
  // 내부망 IP 가져오기
  let clientIp = socket.handshake.address;
  if (socket.handshake.headers["x-forwarded-for"]) {
    clientIp = socket.handshake.headers["x-forwarded-for"].split(",")[0].trim();
  }

  // 프리픽스 제거
  if (clientIp.startsWith("::ffff:")) {
    clientIp = clientIp.replace("::ffff:", "");
  }

  console.log("User connected:", socket.id, "IP:", clientIp);

  // 접속한 사용자의 status를 online으로 변경
  userStatus = userStatus.map((seat) =>
    seat.ip === clientIp ? { ...seat, status: "online" } : seat
  );

  // 좌석 업데이트
  io.emit("userStatus", userStatus);

  // 접속 종료 시 status를 offline으로 변경
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id, "IP:", clientIp);
    userStatus = userStatus.map((seat) =>
      seat.ip === clientIp ? { ...seat, status: "offline" } : seat
    );
    io.emit("userStatus", userStatus);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Socket.io server is running" });
});

server.listen(4000, () => {
  console.log("Socket.io server started on port 4000");
});
