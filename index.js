const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const port = 3000;
const publicDirectoryPath = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

let empires = [ 'AI', 'Memory', 'Plastic', 'Pop Culture', 'Conspiracy Theorists', 'Anti colonists', 'World Leaders', 'Slavery', 'Race', 'Space Conquerors' ]

app.use(express.static(publicDirectoryPath));

io.on("connection", function(socket) {
    let empire = empires[Math.floor(Math.random()*empires.length)]
    socket.emit("systemMessage", `You are the citizen of the ${empire} building.`);

    socket.broadcast.emit("systemMessage", `A new citizen of the ${empire} logged on.`);

    socket.on("socketMessage", function(sendMessage) {
        io.emit("systemMessage", sendMessage);
    });

});

//hello

server.listen(port, function() {
    console.log("Hello, I'm listening on " + port);
});