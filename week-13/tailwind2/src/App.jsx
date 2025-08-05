import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Otp from './components/Otp'
import Webinar from './Webinar'

function App() {

  return (
    <div className='h-screen bg-blue-700'>
      {/* <Webinar/> */}
      {/* <Input type="text" placeholder={"Username"} ></Input>
      <Button disabled={true} >Sign Up</Button> */}

      <Otp/>
    </div>
  )
}

export default App
