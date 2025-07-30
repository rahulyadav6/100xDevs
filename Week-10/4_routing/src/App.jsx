import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        |
        <Link to="/neet/online-coaching-class-11">Class 11</Link>
        |
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
          <Route index element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return <div>
    Header
    <Outlet/>
    Footer
  </div>
}

function Landing(){
  return(
    <div>
      Welcome to allen
    </div>
  )
}

function Class11Program(){
  return(
    <div>
      Class 11 Program
    </div>
  )
}

function Class12Program(){
  return(
    <div>
      Class 12 Program
    </div>
  )
}

function NotFound(){
  return(
    <div>
      Page Not Found
    </div>
  )
}

export default App
