import { useMemo, useState } from "react";

function Memo(){
    const [counter,setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    let count = useMemo(()=>{
        let sum = 0;
        for(let i=1; i<=inputValue; i++){
            sum = sum + i;
        }
        return sum;
    },[inputValue])
    return(
        <div>
            <input onChange={(e)=>{
                setInputValue(e.target.value);
            }}></input>
            <br/>
            Sum from 1 to {inputValue} is {count}
            <br/>

            <button onClick={()=>{
                setCounter(counter+1);
            }}>Couter{counter}</button>
        </div>
    );
}
export default Memo;    