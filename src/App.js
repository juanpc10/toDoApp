
// import './App.css';
// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';

// function App() {

//   const dummyData = [{
//     id: 1,
//     task: 'write code',
//     done: false
//   }];

//   const [todo, setTodo] = useState(dummyData);

//   const addTodo = newTask => {
//     const updatedTodo = [
//       ...todo, 
//       {
//         id: Math.floor(Math.random() * 999),
//         task: newTask,
//         done: false
//       }
//     ];
//     setTodo(updatedTodo)
//   }

//   const handleCheckbox = id => {
//     const updatedTodo = todo.map(item => item.id === id ? {
//       ...item,
//       done: !item.done
//     }
//     :item
//     );
//     setTodo(updatedTodo)
//   };

//   const deleteHandler = id => {
//     const updatedTodo = todo.filter(item => item.id !== id);
//     setTodo(updatedTodo);
//   }

//   const editHandler = (id, newTask) => {
//     const updatedTodo = todo.map(item => item.id === id ? {
//       ...item,
//       task: newTask
//     } : item);
//     setTodo(updatedTodo);

//   }

//   return (
//     <div>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todo={todo} handleCheckbox={handleCheckbox} deleteHandler={deleteHandler} editHandler={editHandler} />
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import "./index.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export default function App() {
  const dummyData = [
    {
      id: 1,
      task: "write code",
      done: false
    }
  ];
  const [todo, setTodo] = useState(dummyData);

  const addTodo = newtodo => {
    const updatedTodo = [
      ...todo,
      { id: Math.floor(Math.random() * 999), task: newtodo, done: false }
    ];
    setTodo(updatedTodo);
  };

  const handleCheckbox = id => {
    const updatedTodo = todo.map(item =>
      item.id === id
        ? {
            ...item,
            done: !item.done
          }
        : item
    );

    setTodo(updatedTodo);
  };

  const deleteTodo = id => {
    const updatedTodo = todo.filter(item => item.id !== id);
    setTodo(updatedTodo);
  };

  const editTodo = (id, newTodo) => {
    const updatedTodo = todo.map(item =>
      item.id === id
        ? {
            ...item,
            task: newTodo
          }
        : item
    );

    setTodo(updatedTodo);
  };

  return (
    <div
      className="ui card"
      style={{
        width: "100%",
        margin: 10,
        padding: 10,
        background: "#076585" /* fallback for old browsers */
      }}
    >
      <TodoForm addTodo={addTodo} />
      <TodoList
        todo={todo}
        handleCheckbox={handleCheckbox}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
