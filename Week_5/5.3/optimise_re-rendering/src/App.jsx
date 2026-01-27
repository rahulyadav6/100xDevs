import './App.css'
import { Button, Card, Typography } from '@mui/material'

import { RecoilRoot, useRecoilValue, useSetRecoilState,atom } from 'recoil'

function App() {

  return (
  <RecoilRoot>
    <div style = {{display: "flex", justifyContent: "center" }}>
    <Card style={{padding:20, width:500}}>
      <Typography variant='h5'>Welcome to the counter game</Typography>
      <br/>
      <Buttons />
      <CountComponent/> 
    </Card>    
    </div>
    </RecoilRoot>
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
  const setCount = useSetRecoilState(countState)
  return(
    <div>
      <Button variant={"contained"} onClick={()=>{
        setCount((prevCount)=>prevCount+1)
      }}>Increase Counter</Button>
    </div>
  );
}
function Decrease(){
  const setCount = useSetRecoilState(countState)
  return(
    <div>
      <Button variant={"contained"} onClick={()=>{
        setCount((prevCount)=>prevCount-1)
      }}>Decrease Counter</Button>
    </div>
  );
}

function CountComponent(){
  const count = useRecoilValue(countState)
  return(
    <div style={{margin: "0 240px", fontSize: "24px", fontWeight: "bold"}}>
      {count}
    </div>
  );
}

export default App

const countState = atom({
  key:'countState',
  default:0,
})