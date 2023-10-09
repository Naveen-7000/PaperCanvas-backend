const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer,{ 
    cors : 'http://localhost:3000'
});

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))


io.on("connection",(socket)=>{
console.log("server connected");
})

httpServer.listen(8000,(req,res)=>{
    console.log('https server listening');
});