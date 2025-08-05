import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className='flex'>
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <MainContent sideBarOpen={sideBarOpen} />
    </div>
  )
}

export default App
