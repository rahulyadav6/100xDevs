import './App.css'
import { SidebarClass1 } from './components/1-basic-project'
function App() {

  return (
    
      // {/* <SidebarClass1/> */}
      <div className='bg-white  dark:bg-slate-600 text-white h-screen'>
      <h1 className='text-black dark:text-white'>hi there</h1>
      <button onClick={() => {
        document.querySelector("html").classList.toggle("dark");
      }}>Toggle theme</button>
      </div>
    
  )
}
 
export default App
