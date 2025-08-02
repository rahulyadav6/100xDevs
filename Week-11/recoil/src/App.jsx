import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atom/counter';

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

function Counter(){
  return(
    <>
      <CurrentCount/>
      <Increase />
      <Decrease />
    </>
  );
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  function increaseCount(){
    setCount((count)=>count+1);
  }
  return(
    <div>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}
function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  function decreaseCount(){
    setCount((count) => count-1)
  }
  return(
    <div>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
export default App
