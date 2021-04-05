// import React from "react";
// import inputStateHook from "./customHooks/inputStateHook";

// const EditForm = (editHandler, id, task, toggleEditForm ) => {
//   const [value,handleChange, resetInput] = inputStateHook(task);

//   const submitHandler = e => {
//     e.preventDefault();
//     resetInput();
//     editHandler(id, value);
//     toggleEditForm()
//   }
//   return (
//     <form onSubmit={submitHandler}>
//       <input type="text" value={value} onChange={handleChange} />
//     </form>
//   )
// }

// export default EditForm


import React from "react";
import inputStateHook from "./customHooks/inputStateHook";

const EditForm = ({ editTodo, id, task, toggleEditForm }) => {
  const [values, handleChange, resetInput] = inputStateHook(task);

  const submitHandler = e => {
    e.preventDefault();
    editTodo(id, values);
    resetInput();

    toggleEditForm();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="ui input"
      style={{ marginLeft: 10 }}
    >
      <input
        type="text"
        placeholder="edit your todo!"
        value={values}
        onChange={handleChange}
      />
    </form>
  );
};

export default EditForm;
