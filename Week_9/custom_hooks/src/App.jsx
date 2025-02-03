/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import { useIsOnline } from 'react-use-is-online';


/* Custom hook */
function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const value = setInterval(() => {
      axios.get("https://dummyjson.com/todos")
      .then(res =>{
        setTodos(res.data.todos);
        setLoading(false);
      })  
    }, n * 1000);
    axios.get("https://dummyjson.com/todos")
    .then(res =>{
      setTodos(res.data.todos);
      setLoading(false);
    })  

    clearInterval(value);

  },[n])
  return { todos, loading };
}

function App() {
  const {isOnline, isOffline, error} = useIsOnline();
  const { todos, loading } = useTodos(5);
  console.log('re-rendered'); // why this is not getting printed on console 
  if(loading){
    return <div>loading...</div>
  }
  if(isOffline){
    return <div>You are offline</div>
  }
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  )
}

function Track({ todo }){
  return(
    <div>
      {todo.todo}
      <br/>
      {todo.userId}
    </div>
  );
}

export default App
