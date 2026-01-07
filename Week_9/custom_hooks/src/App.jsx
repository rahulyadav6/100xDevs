/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clock = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000)
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res =>{
      setTodos(res.data.todos);
      setLoading(false);
    })
    return()=>{
      clearInterval(clock);
    }
  }, [n]);
  
  return { todos, loading };
}

const App = () => {
  // const [render, setRender] = useState(true);
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setRender(r=>!r);
  //   },2000)
  // },[]);

  const { todos, loading } = useTodos(5);

  return (
    <>
      {/* {render?<MyComponent/>:null} */}
      {loading ? "loading..." : todos.map((todo) => <Track todo={todo} />)}
    </>
  );
};

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return <div>From inside my component</div>;
}

export default App;
