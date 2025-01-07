/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  app.use(bodyParser.json());

  const port = 3000;

let id = 1;
let todos = [
  
]

// get all todos
app.get("/todos",(req,res)=>{
  if(!todos || todos.length === 0){
    return res.status(404).send({error:"No todos found"});
  }
  res.send(todos);
})

//get todo with specific id
app.get("/todos/:id",(req,res)=>{
  let id = parseInt(req.params.id);
  let flag = false;
  for(let i=0; i<todos.length; i++){
    if(todos[i].id === id){
      flag = true;
      return res.json(todos[i]);
    }
  }
  if(flag == false) res.status(404).send("Enter a valid id");
})


// 3 Adding a todo via postman done 
app.post("/todos", (req, res) => {
  let todo = req.body;
  let id = parseInt(todo.id);
  let title = todo.title;
  let completed = todo.completed;
  // const { id, title, completed } = req.body; //destructuring method

  // Validate input
  if (typeof id !== "number" || typeof title !== "string" || typeof completed !== "boolean") {
    return res.status(400).send("Invalid todo data");
  }

  // Add the new todo
  todos.push({ id, title, completed });
  return res.status(201).send(`Todo added successfully with id ${id}`);
});



// 4. PUT /todos/:id - Update an existing todo item by ID
app.put("/todos/:id",(req,res)=>{
  let idtoBeUpdated = parseInt(req.params.id);
  const{id,title,completed} = req.body;
  for(let i=0; i<todos.length; i++){
    if(todos[i].id === idtoBeUpdated){
      todos[i].id = id;
      todos[i].title = title;
      todos[i].completed = completed
      return res.send("To do updated successfully");
    }
  }
  return res.status(404).send("Not Found");
})

app.delete("/todos/:id",(req,res)=>{
  let todoToBeDeleted =parseInt(req.params.id);
  todos = todos.filter((todo)=>{
    return todo.id !== todoToBeDeleted
  });
  res.send(`To do with id ${todoToBeDeleted} deleted successfully`);
})


app.all("*",(req,res)=>{
  let request = req.path;
  res.status(404).send("Route not found")
})
app.listen(port,()=>{
  console.log(`Listening to port ${port}`);
})

module.exports = app;