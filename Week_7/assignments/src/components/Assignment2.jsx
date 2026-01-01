import React, { useState } from 'react'

const Assignment2 = () => {
    const [background, setBackground] = useState("white");
    const colors = {
        red: "#ef4444",     // red-500
        yellow: "#eab308",  // yellow-500
        blue: "#3b82f6",    // blue-500
        purple: "#a855f7",  // purple-500
        green:  "#22c55e",  // green-500
    };
  return (
    <div className='h-screen w-full relative transition-colors duration-500' style={{backgroundColor:background}}>
        <div className='bg-gray-300 absolute w-full bottom-5 h-12 flex justify-center items-center gap-2 rounded-3xl shadow-2xl'>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-red-500' onClick={()=>{setBackground(colors.red)}}>Red</div>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-yellow-500' onClick={()=>{setBackground(colors.yellow)}}>Yellow</div>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-black text-white' onClick={()=>{setBackground("black")}}>Black</div>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-purple-500' onClick={()=>{setBackground(colors.purple)}}>Purple</div>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-green-500' onClick={()=>{setBackground(colors.green)}}>Green</div>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-blue-500' onClick={()=>{setBackground(colors.blue)}}>Blue</div>
            <div className='h-10 w-24  flex justify-center items-center cursor-pointer rounded-2xl bg-white' onClick={()=>{setBackground("white")}}>Default</div>
        </div>
    </div>
  )
}

export default Assignment2