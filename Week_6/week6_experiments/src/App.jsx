/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Memo from './Memo';


// function App() {
//   return(
//     <div>
//       <CardWrapper>
//         hi there
//       </CardWrapper>
//     </div>
//   );
// }


// function CardWrapper({children}){
//   return(
//     <div style={{border: "2px solid black", padding:20}}>
//     {children}
//     </div>
//   );
// }



// const Header = React.memo(function Header({ title }){
//   return(
//       <div>
//           {`My name is ${title}`}
//       </div>
//   );
// })


// 6.2 start 


function useCustomHook(){
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/todos")
    .then( (response)=>{
      setTodos(response.data.todos);
    })
  },[])
  return todos;
}

function App(){
  const todos = useCustomHook();
  return(
    <div>
      {todos.map((todo)=>(
        <Todo key={todo.id} todoHeading = {todo.todo} isCompleted={todo.completed} />
      ))}



      {/* <Memo/> */}




    </div>
    // {/* <div>
    //   <Todo id={3} />
    // </div> */}
  );
}

function Todo({todoHeading , isCompleted }){
  return(
    <div>
      <h1>{todoHeading}</h1>
      <h3>{isCompleted ? "Completed ✅" : "Not Completed ❌"}</h3>
    </div>
  );
}


// function Todo({id}){
//   const [todo, setTodo] = useState({});
//   useEffect(()=>{
//     axios.get(`https://dummyjson.com/todos?id=${id}`)
//     .then((response)=>{
//       setTodo(response.data.todo)
//     })
//   },[id])
//   return(
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }
export default App
