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

