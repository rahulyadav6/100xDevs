import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Otp from './components/Otp'
import Webinar from './Webinar'

import { useMediaQuery } from "@uidotdev/usehooks";

function App() {

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

  return (
    <div className='h-screen bg-blue-700'>
      {/* <Webinar/> */}
      {/* <Input type="text" placeholder={"Username"} ></Input>
      <Button disabled={true} >Sign Up</Button> */}

      {/* <Otp/> */}

      <h1 className={isSmallDevice? "text-white" : "text-red-400"}>Hello</h1>
      <h1 className={isMediumDevice? "text-white": "text-red-400"}>I am Rahul</h1>

    </div>
  )
}

export default App
