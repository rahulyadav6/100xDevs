import './App.css'

function App() {
  return (
    <>
      <Todo title='Code' description='Write alot of code' done={false} />
    </>
  )
}

interface TodoProp{
  title:string,
  description:string,
  done:boolean
}

function Todo({title, description, done}: TodoProp){
  return<div>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <h3>{done?"Done":"Not Done"}</h3>
  </div>

}

export default App
