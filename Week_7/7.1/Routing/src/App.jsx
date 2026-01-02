import React from 'react'
import { Suspense } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(() =>import('./components/Dashboard'))
const Landing = React.lazy(() =>import('./components/Landing'))
// import Landing from './components/Landing'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={ <Suspense fallback={"Loading..."}> <Dashboard /></Suspense> }  />
          <Route path='/' element={<Suspense fallback={"Loading..."}><Landing /></Suspense> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
      <div>
        <button onClick={()=>{
          // window.location.href = '/'
          navigate("/");
        }}>Landing</button>
        <button onClick={()=>{
          // window.location.href = '/dashboard'
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
    </div>
  );
}

export default App
