
import { useEffect, useState } from 'react';
import './App.css'
import { SidebarToggle } from '../components/icons/SidebarToggle';


const useMediaQuery = (query) =>{
  const[matches, setMatches] = useState(false);
  useEffect(()=>{
    const media = window.matchMedia(query);
    if(media.matches !== matches){
      setMatches(media.matches);
    }
    const listener = ()=> setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query, matches])
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(()=>{
    if(isDesktop == false){
      setSidebarOpen(false)
    }else{
      setSidebarOpen(true)
    }
  },[isDesktop])
  return(
    <div className='flex min-h-screen'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  );
    
    
    // <>
    //    <div className='bg-white  dark:bg-slate-600 text-white h-screen'>
    //   <h1 className='text-black dark:text-white'>hi there</h1>
    //   <button className='text-black dark:text-white ' onClick={() => {
    //     document.querySelector("html").classList.toggle("dark");
    //   }}>Toggle theme</button>
    //   </div>
    // </>
  // )
}

// eslint-disable-next-line react/prop-types
function Sidebar({ sidebarOpen, setSidebarOpen }){
  if(!sidebarOpen){
    return (<div className='cursor-pointer hover:bg-slate-200 size-8' onClick={()=>{
      console.log(sidebarOpen);
      setSidebarOpen(!sidebarOpen)
    }}>
      <SidebarToggle/>
    </div>
  );
  }
  return(
    <div className='w-40 min-h-screen bg-red-100 absolute md:relative'>
      <div className='cursor-pointer hover:bg-slate-200 size-8' onClick={()=>{
        console.log(sidebarOpen);
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle/>
      </div>
    </div>
  );
}
function MainContent(){
  return(
    <div className='w-full'>
      <div className=' h-28 bg-black'></div>
      <div className='grid grid-cols-11 gap-5 p-4'>
      <div className='hidden md:block h-96 rounded-2xl shadow-lg bg-red-200 md:col-span-2 -translate-y-20 col-span-11' >

      </div>
      <div className='h-96 rounded-2xl shadow-lg bg-green-200 md:col-span-6 col-span-11' >

      </div>
      <div className='h-96 rounded-2xl shadow-lg bg-yellow-200 md:col-span-3 col-span-11' >

      </div>

      </div>
    </div>
  );
}

export default App
