/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useFetch } from './hooks/useFetch';
import './App.css'


function useCounter(){
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}
function App() {
  const {count, increaseCount} = useCounter();
  const posttitle = useFetch();
  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
      {posttitle}
    </>
  )
}

export default App