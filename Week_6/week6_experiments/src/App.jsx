/* eslint-disable react/prop-types */

// import { useState } from "react";
// import { memo } from "react";

function App(){
  return(
    <>
      <CardWrapper>
          <Hello/>
      </CardWrapper>
    </>
  );
}
function CardWrapper({children}){
  return(
    <div style={{border:"2px solid black"}}>
      {children}
    </div>
  );
}
function Hello(){
  return(
    <div>Hello World!!</div>
  );
}

export default App

// function App(){
//    const [firstTitle, setFirstTitle] = useState("My name is Rahul");
//    function changeTitle(){
//     setFirstTitle("My name is " + Math.random())
//    }
//    return(
//     <>
//       <button onClick={changeTitle}>Click me to change the tile</button>
//       <Header title = {firstTitle}/>
//       <Header title="My name is Rahul"/>
//       <Header title="My name is Rahul"/>
//       <Header title="My name is Rahul"/>
//       <Header title="My name is Rahul"/>
//       <Header title="My name is Rahul"/>
//       <Header title="My name is Rahul"/>
//     </>
//    );
// }
// const Header = memo(({title})=>{
//    console.log("render:", title);
//   return <div>
//     {title}
//   </div>;
// })
// export default App