/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Sidebar2 from './components/Sidebar2';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className='flex'>
      {/* <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} /> */}
      <Sidebar2/>
      <MainContent sideBarOpen={sideBarOpen} />
    </div>
  )
}

export default App
