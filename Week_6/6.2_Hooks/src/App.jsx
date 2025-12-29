import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [inputVal, setInputVal] = useState(0);


  let memoizedSum = useMemo(()=>{
    let counter = 0;
    for(let i=0; i<=inputVal; i++){
      counter+=i;
    }
    return counter;
  },[inputVal])
  const handleChange = (event)=>{
    const value = Number(event.target.value);
    setInputVal(value);
  }

  return (
    <>
      <input
        value={inputVal}
        onChange={handleChange}
      />
      <p>Sum from 1 to {inputVal} is {memoizedSum}</p>
      <button onClick={()=> setCount(count+1)}>Count {count}</button>
    </>
  )
}

export default App
