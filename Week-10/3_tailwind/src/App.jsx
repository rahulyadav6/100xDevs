
import './App.css'

function App() {

  return (
    <>
       <div className='bg-white  dark:bg-slate-600 text-white h-screen'>
      <h1 className='text-black dark:text-white'>hi there</h1>
      <button className='text-black dark:text-white ' onClick={() => {
        document.querySelector("html").classList.toggle("dark");
      }}>Toggle theme</button>
      </div>
    </>
  )
}

export default App
