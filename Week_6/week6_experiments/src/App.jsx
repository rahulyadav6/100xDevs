/* eslint-disable react/prop-types */

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
