/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [todos, settodos] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then((response)=>{
      response.json().then((data)=>{
        console.log(data);
        const todosArray = Object.values(data);
        settodos(todosArray);
      })
    });
  },[])
  return (
    <>
      {todos.map((todo)=>{
        return <div key = {todo.id} >
          {todo.title}
          {todo.description}
        </div>
      })}
    </>
  )
}

export default App
