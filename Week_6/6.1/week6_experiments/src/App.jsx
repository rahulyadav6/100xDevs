/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import React from 'react';
import './App.css'

function App() {
  return(
    <div>
      <CardWrapper>
        hi there
      </CardWrapper>
    </div>
  );
}


function CardWrapper({children}){
  return(
    <div style={{border: "2px solid black", padding:20}}>
    {children}
    </div>
  );
}



// const Header = React.memo(function Header({ title }){
//   return(
//       <div>
//           {`My name is ${title}`}
//       </div>
//   );
// })
export default App
