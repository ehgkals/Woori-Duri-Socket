import express from "express";
import http from "http";
import axios from "axios";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let userStatus = [
  {
    id: 1,
    ip: "192.168.0.6",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 2,
    ip: "192.168.0.21",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 3,
    ip: "192.168.0.16",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 4,
    ip: "192.168.0.24",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 5,
    ip: "192.168.0.29",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 7,
    ip: "192.168.0.37",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 8,
    ip: "192.168.0.10",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 9,
    ip: "192.168.0.239",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 10,
    ip: "192.168.0.68",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 11,
    ip: "192.168.0.7",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 12,
    ip: "192.168.0.8",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 13,
    ip: "192.168.0.20",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 14,
    ip: "192.168.0.25",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 16,
    ip: "192.168.0.18",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 17,
    ip: "192.168.0.42",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 18,
    ip: "192.168.0.23",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 19,
    ip: "192.168.0.27",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 20,
    ip: "192.168.0.26",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 21,
    ip: "192.168.0.32",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 22,
    ip: "192.168.0.41",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 23,
    ip: "192.168.0.40",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 25,
    ip: "192.168.0.31",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 26,
    ip: "192.168.0.11",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 27,
    ip: "192.168.0.35",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 28,
    ip: "192.168.0.36",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 29,
    ip: "192.168.0.39",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 30,
    ip: "192.168.0.44",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 31,
    ip: "192.168.0.43",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 32,
    ip: "192.168.0.38",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 34,
    ip: "192.168.0.34",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 35,
    ip: "192.168.0.28",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 36,
    ip: "192.168.0.33",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 37,
    ip: "192.168.0.30",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 45,
    ip: "192.168.0.60",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 46,
    ip: "192.168.0.42",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 52,
    ip: "192.168.0.22",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
  {
    id: 53,
    ip: "192.168.219.108",
    status: "offline",
    name: "",
    ready: false,
    currentWord: 0,
    finishTime: null,
  },
];

const readyToStartUsers = new Set();
let gameWords = [];
const WORD_COUNT = 20;

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

  console.log("User connected:", clientIp);

  // 접속한 사용자의 status를 online으로 변경
  userStatus = userStatus.map((seat) =>
    seat.ip === clientIp ? { ...seat, status: "online", ready: false } : seat
  );

  async function fetchGameWords() {
    const res = await axios.get(
      `https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`
    );
    gameWords = res.data;
  }

  // 좌석 업데이트
  socket.emit("userStatus", { list: userStatus, me: clientIp }); // 나한테만
  io.emit("userStatus", { list: userStatus });

  socket.on("getUserStatus", () => {
    socket.emit("userStatus", { list: userStatus, me: clientIp });
  });

  // 처음 접속 시 이름 설정
  socket.on("setUserName", (userName) => {
    userStatus = userStatus.map((seat) =>
      seat.ip === clientIp
        ? { ...seat, name: userName, status: "online" }
        : seat
    );

    socket.emit("userStatus", { list: userStatus, me: clientIp }); // 나한테만
    io.emit("userStatus", { list: userStatus });
  });

  // 준비 완료 요청
  socket.on("requestReady", () => {
    userStatus = userStatus.map((user) =>
      user.status === "online" ? { ...user, ready: false } : user
    );
    io.emit("userStatus", { list: userStatus });
    io.emit("showReadyModal");
  });

  // 준비 완료 확인
  socket.on("readyResponse", ({ ip }) => {
    userStatus = userStatus.map((user) =>
      user.ip === ip ? { ...user, ready: true } : user
    );
    io.emit("userStatus", { list: userStatus });

    // 모두 준비 완료했으면 다음 화면으로
    const total = userStatus.filter((u) => u.status === "online").length;
    const readyCount = userStatus.filter(
      (u) => u.status === "online" && u.ready
    ).length;

    if (readyCount === total && total > 0) {
      io.emit("moveToNextScreen");
      // 준비상태 초기화
      userStatus = userStatus.map((u) =>
        u.status === "online" ? { ...u, ready: false } : u
      );
      io.emit("userStatus", { list: userStatus });
    }
  });

  // 게임 로딩 + 사용자 정보 다 받아오면 시작
  socket.on("readyToStart", async () => {
    readyToStartUsers.add(clientIp);
    const onlineCount = userStatus.filter((u) => u.status === "online").length;
    if (readyToStartUsers.size === onlineCount && onlineCount > 0) {
      await fetchGameWords();
      io.emit("words", gameWords);
      io.emit("startCountdown");
      readyToStartUsers.clear(); // 초기화
    }
  });

  // 게임 중 단어 갯수 갱신
  socket.on("playingGame", ({ ip, currentWord }) => {
    userStatus = userStatus.map((user) =>
      user.ip === ip ? { ...user, currentWord } : user
    );
    io.emit("userStatus", { list: userStatus });
  });

  // 게임이 끝난 User의 시간 기록
  socket.on("finishGame", ({ ip, finishTime }) => {
    userStatus = userStatus.map((user) =>
      user.ip === ip ? { ...user, finishTime } : user
    );

    io.emit("userStatus", { list: userStatus });
  });

  // 접속 종료 시 status를 offline, ready를 false으로 변경
  socket.on("disconnect", () => {
    console.log("User disconnected:", clientIp);
    userStatus = userStatus.map((seat) =>
      seat.ip === clientIp
        ? {
            ...seat,
            status: "offline",
            ready: false,
            currentWord: 0,
            finishTime: null,
          }
        : seat
    );
    io.emit("userStatus", { list: userStatus });
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Socket.io server is running" });
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Socket.io server started on port 4000");
});
