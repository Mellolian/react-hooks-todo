import React, { useState } from "react";
import uuid from "uuid";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) =>
    setTodo({ ...todo, task: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...todo, id: uuid.v4() });
    setTodo({ ...todo, task: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      ></input>
      <button>Добавить</button>
    </form>
  );
}
