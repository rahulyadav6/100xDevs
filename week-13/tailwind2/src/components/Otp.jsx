import { useRef, useState } from "react";
import Button from "./Button";

function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisable] = useState(true);
    return(
        <>
            <div className="flex justify-center">
                <SubOtpBox reference={ref1} onDone={()=>{
                    ref2.current.focus();
                }} OnPress={()=>{
                    ref1.current.focus();
                }} />
                <SubOtpBox reference={ref2} onDone={()=>{
                    ref3.current.focus();
                }} OnPress={()=>{
                    ref1.current.focus();
                }}/>
                <SubOtpBox reference={ref3} onDone={()=>{
                    ref4.current.focus();
                }} OnPress={()=>{
                    ref2.current.focus();
                }}/>
                <SubOtpBox reference={ref4} onDone={()=>{
                    ref5.current.focus();
                }} OnPress={()=>{
                    ref3.current.focus();
                }}/>
                <SubOtpBox reference={ref5} onDone={()=>{
                    ref6.current.focus();
                }} OnPress={()=>{
                    ref4.current.focus();
                }}/>
                <SubOtpBox reference={ref6} onDone={()=>{
                    setDisable(false);
                }} OnPress={()=>{
                    ref5.current.focus();
                }}/>
            <Button disabled={disabled}>Sign Up</Button>
            </div>
        </>

    );
}

function SubOtpBox({
    reference, onDone, OnPress
}){
    return <div>
        <input ref={reference} onChange={()=>{
            onDone();
        }}
        onKeyDown={(e)=>{
            if(e.key === "Backspace"){
                if(e.target.value === ''){
                    OnPress();
                    e.target.value = '';
                }
            }
        }}
        type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}

export default Otp;