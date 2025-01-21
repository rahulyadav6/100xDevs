import PropTypes from 'prop-types';
export function Todos({todos}){
    if(!todos || todos.length === 0){
        return <div>
            No todos available
        </div>;
    }
    return(
        <div>
            {todos.map((todo,index)=>{
                return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "completed": "Mark as completed "}</button>
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