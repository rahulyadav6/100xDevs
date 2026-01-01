import React, { useState } from 'react'

const Assignment2 = () => {
    const [background, setBackground] = useState("white");
    const colorKeys = ["red", "yellow", "black", "purple", "green", "blue", "white"];
    const [focusedIndex, setFocusedIndex] = useState(6);
    const colors = {
        red: "#ef4444",     // red-500
        yellow: "#eab308",  // yellow-500
        blue: "#3b82f6",    // blue-500
        purple: "#a855f7",  // purple-500
        green:  "#22c55e",  // green-500
    };
  return (
    <div className='h-screen w-full relative transition-colors duration-500' style={{backgroundColor:background}} tabIndex={0} onKeyDown={(e)=>{
        if(e.key === 'r') setBackground(colors.red);
        if(e.key === 'y') setBackground(colors.yellow);
        if(e.key === 'b') setBackground(colors.blue);
        if(e.key === 'p') setBackground(colors.purple);
        if(e.key === 'g') setBackground(colors.green);
        if(e.key === 'd') setBackground("white");

        if(e.key === "ArrowRight"){
            setFocusedIndex((prev)=>{
                return prev === colorKeys.length - 1 ? 0:prev+1
            })
        }
        if(e.key === "ArrowLeft"){
            setFocusedIndex((prev)=>{
                return prev === 0 ? colorKeys.length - 1: prev-1
            })
        }

        if(e.key === "Enter"){
            const selected = colorKeys[focusedIndex];
            if (colors[selected]) {
            setBackground(colors[selected]);
            } else {
            setBackground("white"); 
            }
        }
    }}>
        <div className='bg-gray-300 absolute w-full bottom-5 h-12 flex justify-center items-center gap-2 rounded-3xl shadow-2xl'>
            <div className= {`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-red-500 ${focusedIndex === 0 ? "ring-2 ring-black": ""}`} onClick={()=>{setBackground(colors.red)}}>Red</div>
            <div className={`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-yellow-500 ${focusedIndex === 1 ? "ring-2 ring-black": ""}`} onClick={()=>{setBackground(colors.yellow)}}>Yellow</div>
            <div className={`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-black text-white ${focusedIndex === 2 ? "ring-2 ring-white": ""}`} onClick={()=>{setBackground("black")}}>Black</div>
            <div className={`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-purple-500 ${focusedIndex === 3 ? "ring-2 ring-black": ""}`} onClick={()=>{setBackground(colors.purple)}}>Purple</div>
            <div className={`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-green-500 ${focusedIndex === 4 ? "ring-2 ring-black": ""}`} onClick={()=>{setBackground(colors.green)}}>Green</div>
            <div className={`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-blue-500 ${focusedIndex === 5 ? "ring-2 ring-black": ""}`} onClick={()=>{setBackground(colors.blue)}}>Blue</div>
            <div className={`h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-white ${focusedIndex === 6 ? "ring-2 ring-black": ""}`} onClick={()=>{setBackground("white")}}>Default</div>
        </div>
    </div>
  )
}

export default Assignment2