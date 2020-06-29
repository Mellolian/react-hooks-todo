import React from "react";

function Todo({ todo, deleteTodo }) {
  function handleDelete(id) {
    console.log(id);
    deleteTodo(id);
  }
  return (
    <p key={todo.id}>
      <input type="checkbox" /> {todo.task}{" "}
      <button onClick={() => handleDelete(todo.id)}>X</button>
    </p>
  );
}

export default Todo;
