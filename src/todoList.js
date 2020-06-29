import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default TodoList;
