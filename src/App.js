import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    console.log(todo);
    setTodos([todo, ...todos]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
