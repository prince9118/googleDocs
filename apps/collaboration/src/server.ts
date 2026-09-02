import { WebSocketServer, WebSocket } from "ws";
const PORT = 4001;

const wss = new WebSocketServer({
  port: PORT
});

wss.on("connection", (socket: WebSocket) => {
  console.log("Client connected");
  socket.send(
    JSON.stringify({
      type: "connected",
      message: "Connected to collaboratio  server"
    })
  );
  socket.on("message", (message) => {
    console.log("Received", message.toString());
    socket.send(
      JSON.stringify({
        type: "ack",
        message: "message received"
      })
    );
  });
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
console.log(`Collaboration server running on ws:localhost:${PORT}`);
