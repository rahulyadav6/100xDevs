// The below all code should be pased in App.jsx to work i have just stored it for reference of context api


import { createContext, useContext, useState } from 'react'
import './App.css'
import { Button, Card, Typography } from '@mui/material'


const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
  <CountContext.Provider value={{
    count:count,
    setCount: setCount
  }}>
    <div style = {{display: "flex", justifyContent: "center" }}>
    <Card style={{padding:20, width:500}}>
      <Typography variant='h5'>Welcome to the counter game</Typography>
      <br/>
      <Buttons />
      <CountComponent/> 
    </Card>    
    </div>
    </CountContext.Provider>
  )
}

function Buttons(){
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase(){
  const {count, setCount} = useContext(CountContext)
  return(
    <div>
      <Button variant={"contained"} onClick={()=>{
        setCount(count+1)
      }}>Increase Counter</Button>
    </div>
  );
}
function Decrease(){
  const {count, setCount} = useContext(CountContext)
  return(
    <div>
      <Button variant={"contained"} onClick={()=>{
        setCount(count-1)
      }}>Decrease Counter</Button>
    </div>
  );
}

function CountComponent(){
  const { count } = useContext(CountContext)
  return(
    <div style={{margin: "0 240px", fontSize: "24px", fontWeight: "bold"}}>
      {count}
    </div>
  );
}

export default App
