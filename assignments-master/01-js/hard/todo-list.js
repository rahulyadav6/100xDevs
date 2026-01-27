/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
    this.idx = 0;
  }
  add(str){
    this.todos.push(str);
    this.idx++;
  }
  remove(indexOfTodo){
    if(indexOfTodo >=0 && indexOfTodo < this.todos.length){
      this.todos.splice(indexOfTodo,1);
      this.idx--;
    }else{
      return null;
    }
  }
  update(index,updatedTodo){
    if(index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todos.length) return this.todos[indexOfTodo];
    else return null;
  }
  clear(){
    this.todos = [];
    this.idx = 0;
  }
}
//Manual testing
let todoArray = new Todo();
todoArray.add("Code");
todoArray.add("Eat");
todoArray.add("Sleep");
todoArray.remove(2);
todoArray.update(1,"Eat banana");
todoArray.add("sleep");
console.log(todoArray.getAll());
console.log(todoArray.get(2));

todoArray.clear();
console.log(todoArray);


module.exports = Todo;
