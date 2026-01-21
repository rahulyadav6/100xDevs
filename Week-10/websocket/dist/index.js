import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
// basic example
// wss.on("connection", function(socket){
//     socket.send("User connected");
//     setInterval(()=>{
//         socket.send(`Current price of solana is ${(Math.random()*100)+1}`);
//     },500)
//     socket.on("message", (e)=>{
//         console.log(e.toString());
//     })
// })
/* echo application using websocket */
wss.on("connection", function (socket) {
    console.log("User connected");
    socket.on("message", (e) => {
        console.log(e.toString());
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map