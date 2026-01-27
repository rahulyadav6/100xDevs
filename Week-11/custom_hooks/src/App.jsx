/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useFetch, usePostTitle } from './hooks/useFetch';
import './App.css'


function useCounter(){
  const [ count, setCount ] = useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}
function App() {
  const { count, increaseCount} = useCounter();
  const posttitle = usePostTitle();
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/13");

  if(loading){
    return <div>
      Loading....
    </div>
  }
  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
      <br></br>
      <br></br>
      {posttitle}
      <br></br>
      <br></br>
      {JSON.stringify(data)}
    </>
  )
}

export default App