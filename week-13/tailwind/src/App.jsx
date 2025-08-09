import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Sidebar2 from './components/Sidebar2';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className='flex'>
      {/* <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <MainContent sideBarOpen={sideBarOpen} /> */}
      <Sidebar2/>
    </div>
  )
}

export default App
