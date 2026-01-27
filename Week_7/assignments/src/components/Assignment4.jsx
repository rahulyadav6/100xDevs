//Question.4 : create a paragraph generator which takes length of words in paragraph and generate paragraph.
import React, { useRef, useState } from 'react'

const Assignment4 = () => {
    const [inputVal, setInputVal] = useState("");
    const divRef = useRef(null);
    const words = ["react","javascript","frontend","developer","component","state","props","hook","function","library","ui","design","code","logic","web","application","performance","optimization","clean","reusable",];

    const generateParagraph = ()=>{
        const count = Number(inputVal);
        if(!count || count <=0){
            divRef.current.innerText = "Please enter a valid number of words.";
            return;
        }
        let result = [];

        for(let i=0; i<count; i++){
            const randomIndex = Math.floor(Math.random()*words.length);
            result.push(words[randomIndex]);
        }

        divRef.current.innerText = result.join(" ");
    }


  return (
    <div className='h-screen w-screen bg-white '>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='mt-10 mb-5 font-bold text-4xl'>Para Generator</h1>
            <div className='flex gap-5'>
                <input
                    className='w-2xl border rounded-xl border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 h-14 p-4 transition-all duration-200'
                    placeholder='Enter Number of Words'
                    value={inputVal}
                    onChange={(e)=>{
                        setInputVal(e.target.value);
                    }}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            generateParagraph();
                        }
                    }}
                />
                <button className='bg-black text-white text-xl p-3 rounded-2xl cursor-pointer'
                onClick={generateParagraph}
                >
                Generate
                </button>
            </div>
            <div ref={divRef}
                className="mt-8 max-w-3xl text-lg text-gray-700 p-5 rounded-xl"
            >
            </div>
        </div>
    </div>
  )
}

export default Assignment4