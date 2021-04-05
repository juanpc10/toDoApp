// import React from "react";
// import inputStateHook from "./customHooks/inputStateHook";

// function TodoForm({ addTodo }) {
//   const [value, handleChange, resetInput] = inputStateHook();
//   const submitHandler = e => {
//     e.preventDefault();
//     addTodo(value);
//     resetInput()
//   }
//   return (
//     <form onSubmit={submitHandler}>
//       <input type="text" value={value} onChange={handleChange} />
//       <p>{value}</p>
//     </form>
//   );
// }

// export default TodoForm;


import React from "react";
import customInputHook from "./customHooks/inputStateHook";

const TodoForm = ({ addTodo }) => {
  const [values, handleChange, resetInput] = customInputHook();
  const submitHandler = e => {
    e.preventDefault();
    addTodo(values);
    resetInput();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="ui input">
        <input
          type="text"
          placeholder="enter items"
          value={values}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default TodoForm;
