import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Appbar from './Appbar'
import './App.css'
import SingUp from './SignUp'
import SingIn from './Signin'
import AddCourse from './AddCourse';

function App() {
  return (
    <Router>
    <div style={{width:"100vw", height: "100vh", backgroundColor:"#eeeeee"}}>
    <Appbar/>
      <Routes>
        <Route path="/" element={<SingUp/>}/>
        <Route path={'/addcourse'} element = {<AddCourse/>} />
        <Route path="/singin" element={<SingIn/>}/>
        <Route path="/singup" element={<SingUp/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
