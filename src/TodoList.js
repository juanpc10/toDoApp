// import React from "react";
// import TodoItem from "./TodoItem";


// const TodoList = ({ todo, handleCheckbox, deleteHandler, editHandler }) => {
//   return (
//     <div>
//       {todo.map(item => <TodoItem task={item.task} key={item.id} id={item.id} done={item.done} handleCheckbox={handleCheckbox} deleteHandler={deleteHandler} editHandler={editHandler} /> )}
//     </div>
//   );
// }

// export default TodoList;


import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, handleCheckbox, deleteTodo, editTodo }) => {
  return (
    <div>
      {todo.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          task={item.task}
          done={item.done}
          handleCheckbox={handleCheckbox}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
