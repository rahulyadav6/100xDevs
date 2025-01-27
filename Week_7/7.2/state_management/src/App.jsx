import { RecoilRoot, useRecoilValue, useSetRecoilState, } from 'recoil'
import { countAtom , evenSelector} from './store/atoms/count'

function App() {

  return (
    <>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    </>
  )
}

function Count(){
  console.log("re-rendered");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
      {count}
    </b>
    
  </div>
}

function EvenCountRendered(){
  const isEven = useRecoilValue(evenSelector);
  return(
    <div>
      {isEven ? "It is even ": null}
    </div>
  );
}

function Buttons(){
  // const [count,setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count => count - 1)
    }}>Decrease</button>
    <EvenCountRendered /> 
  </div>
}
export default App
