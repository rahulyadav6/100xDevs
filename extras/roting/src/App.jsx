import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/neet/online-coaching-class-11' element={<Class11Program/>} />
        <Route path='/neet/online-coaching-class-12' element={<Class12Program/>} />
        <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
function Landing(){
  return(
    <>
      Welcome to aleen
    </>
  );
}
function Class11Program(){
  return(
    <>
      NEET programs for class 11.
    </>
  );
}
function Class12Program(){
  return(
    <>
      NEET programs for class 12.
    </>
  );
}

export default App
