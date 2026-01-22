import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["hi there"]);
  const wsRef = useRef();

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event)=>{
      setMessages(m => [...m, event.data]);
    }
    wsRef.current = ws;
    ws.onopen = ()=>{
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }
    return()=>{
      ws.close();
    }
  },[])

  return (
    <div className='h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col justify-between w-screen items-center text-white p-6'>
      {/* Messages Container */}
      <div className='w-full max-w-2xl flex-1 bg-gray-800 rounded-3xl shadow-2xl p-6 mb-6 overflow-y-auto border border-gray-700'>
        <div className='text-gray-400 text-center py-12'>{messages.map(message => <div>{message}</div>)}</div>
      </div>

      {/* Input Area */}
      <div className='w-full max-w-2xl'>
        <div className='bg-gradient-to-r from-gray-800 to-gray-700 flex gap-3 p-4 rounded-3xl shadow-2xl border border-gray-600'>
          <input
            type='text'
            id='message'
            placeholder='Type your message...'
            className='flex-1 bg-gray-900 text-white rounded-2xl px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 transition'
          />
          <button onClick={()=>{
            const message = document.getElementById("message")?.value;
            wsRef.current.send(JSON.stringify({
              type:"chat",
              payload:{
                message: message
              }
            }))
          }} className='bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-2xl cursor-pointer font-semibold transition transform hover:scale-105 shadow-lg'>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
