import './App.css'

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program/>} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program/>} />
          <Route path='/' element={<Landing/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
function Layout(){
  return <div style={{height:"90vh"}}>
    <Header/>
    <div style={{height:"90vh"}}>
      <Outlet/>
    </div>
    Footer | Contact us
  </div>
}
function Header(){
  return(
    <div>
      <Link to="/">Aleen</Link>
        |
        <Link to="/neet/online-coaching-class-11">Class 11</Link>
        |
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  );
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
function ErrorPage(){
  return(
    <div>
      Sorry page not found
    </div>
  );
}

export default App
