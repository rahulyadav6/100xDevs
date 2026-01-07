import  { useEffect  } from 'react'

const App = () => {
  
  return (
    <>
      <MyComponent/>
    </>
  )
}

function MyComponent(){
  useEffect(()=>{
    console.log("Component mounted");
    return()=>{
      console.log("component unmounted");
    }
  },[])
  return <div>
    From inside my component
  </div>
}

export default App