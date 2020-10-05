const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const port = 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {

    socket.emit("systemMessage", "Hello, welcome to your realtime app!");

    socket.broadcast.emit("systemMessage", "A new user joined.");

    socket.on("socketMessage", function(sendMessage) {
        io.emit("systemMessage", sendMessage);
    });

});

server.listen(port, function() {
    console.log("Hello, I'm listening on " + port);
});