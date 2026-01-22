import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port:8080}) 

interface User{
    socket: WebSocket;
    room:String;
}
let clients: User[] = [];

wss.on("connection", (socket)=>{
    console.log("User connected");

    socket.on("message", (message)=>{
        //@ts-ignore
        const parsedMessage = JSON.parse(message);
       if(parsedMessage.type === "join"){
        console.log(`User joined room ${parsedMessage.payload.roomId}`); //debugging
        
        clients.push({
            socket,
            room: parsedMessage.payload.roomId
        })
       }
       if(parsedMessage.type === "chat"){
        console.log(`User wants to chat`); //debugging
        
        let currentUserRoom = null;
        for(let i=0; i<clients.length; i++){
            if(clients[i]?.socket == socket){
                currentUserRoom = clients[i]?.room;
            }
        }
        for(let i=0; i<clients.length; i++){
            if(clients[i]?.room == currentUserRoom){
                clients[i]?.socket.send(parsedMessage.payload.message);
            }
        }
       }
    })
    // socket.on("disconnect", ()=>{
    //     clients = clients.filter(x => x != socket);
    // })
})

/*
{
	"type":"chat",
	"payload":{
		"message":"hi there"
	}
}
 */