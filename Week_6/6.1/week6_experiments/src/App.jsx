/* eslint-disable react/prop-types */
import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [title, settitle] = useState("Rahul");
  return (
    <div>
      <button onClick={()=>{
        settitle(Math.random());
      }}>Click me to change the title</button>
      <Header title={title} />
      <Header title={"Kaushal"} />
      <Header title={"Kaushal"} />
      <Header title={"Kaushal"} />
      <Header title={"Kaushal"} />
      <Header title={"Kaushal"} />
      <Header title={"Kaushal"} />
    </div>
  )
}

const Header = React.memo(function Header({ title }){
  return(
      <div>
          {`My name is ${title}`}
      </div>
  );
})
export default App
