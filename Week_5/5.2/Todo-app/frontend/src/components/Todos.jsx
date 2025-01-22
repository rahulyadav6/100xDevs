import PropTypes from 'prop-types';
export function Todos({todos}){
    if(!todos || todos.length === 0){
        return <div>
            No todos available
        </div>;
    }
    return(
        <div>
            {todos.map((todo)=>{
                return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button
                    onClick={async()=>{
                    await fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body:JSON.stringify({
                            id: todo._id,
                        }),
                        headers:{
                            "Content-type":"application/json"
                        }
                    })
                    }}
                >{todo.completed == true? "completed": "Mark as completed "}</button>
                </div>
            })}
        </div>
    );
}
// Add PropTypes validation
Todos.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
};