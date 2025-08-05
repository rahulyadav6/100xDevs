import './App.css'
import Button from './components/Button'
import Webinar from './Webinar'

function App() {

  return (
    <div className='h-screen bg-blue-700'>
      {/* <Webinar/> */}
      <Button disabled={true} >Sign Up</Button>
    </div>
  )
}

export default App
