import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port:8080}) 

let clients: WebSocket[] = [];

wss.on("connection", (socket)=>{
    console.log("User connected");
    clients.push(socket);

    socket.on("message", (message)=>{
        console.log(`Message received ${message.toString()}`);
        clients.forEach((client)=>{
            client.send(`${message.toString()} from the server`)
        })
    })
    socket.on("disconnect", ()=>{
        clients = clients.filter(x => x!= socket);
    })
})