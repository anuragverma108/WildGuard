const express = require('express');
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

app.use(express.static('public'));


// Serve static files from the 'public' directory (e.g., /js/script.js)
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = socketio(server);

// WebSocket connections for real-time location updates
io.on("connection", function(socket) {
    socket.on("send-location", function(data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });
    console.log("User connected:", socket.id);
});

// Serve the HTML file directly from the root directory
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'map.html'));
});


// Start the server
server.listen(3000, () => console.log('Server is running on port 3000'));
