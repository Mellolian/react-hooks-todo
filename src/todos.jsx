// import React, { useState, useEffect } from "react";

// export default function Todos() {
//   const [todoList, setTodoList] = useState([{ text: "my first todo" }]);

//   const deleteTodo = (index) => {
//     setTodoList([...todoList].splice(index, 1));
//   };

//   // setTodoList([...todoList, {todo}])
//   return (
//     <>
//       <ul>
//         {todoList.map((todo, index) => (
//           <li key="index">
//             {todo.text}
//             <button onClick={() => deleteTodo(index)}>Delete todo</button>
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={addTodo}>
//         <input value={null}></input>
//         <button type="submit">Добавить</button>
//       </form>
//     </>
//   );
// }
